# Hilman Nidal Hamzi — Portfolio Coding Guide
## Execution Flow & Engineering Discipline

> **Status**: Source of truth untuk *proses kerja* — berpasangan dengan `hilman-porto-design-system.md` (source of truth untuk *spesifikasi desain*).
> **Last updated**: 2026-06-26
> **Owner**: Hilman Nidal Hamzi (kaz-hero123)
> **Tujuan dokumen**: memastikan setiap sesi coding, siapapun yang mengerjakan (kamu, Claude, atau kontributor lain), mengikuti urutan dan disiplin yang sama — supaya progres tidak kocar-kacir, tidak ada rework besar di tengah jalan, dan tidak ada keputusan desain yang diambil secara ad-hoc di luar spec.

---

## 0. Relasi Antar Dokumen

Dua dokumen ini punya tanggung jawab yang **tidak boleh tumpang tindih**:

| Dokumen | Menjawab pertanyaan | Mengatur |
|---|---|---|
| `hilman-porto-design-system.md` | "Seperti apa seharusnya ini dibangun?" | Token warna, tipografi, kode komponen, copy rules, a11y floor |
| `hilman-coding-guide.md` (dokumen ini) | "Dengan urutan dan disiplin apa kita membangunnya?" | Gate, workflow per-task, aturan eskalasi, checklist commit, blocker tracking |

**Aturan resolusi konflik:**
- Konflik soal desain (warna, spacing, copy, animasi) → **design-system.md menang**.
- Konflik soal proses (urutan kerja, kapan boleh lanjut ke gate berikutnya, kapan harus stop) → **dokumen ini menang**.

**Aturan anti-drift:** dokumen ini tidak menyalin ulang token, kode komponen, atau data dari design-system.md — hanya mereferensikan section-nya (misalnya "lihat §8.4 untuk Button"). Kalau token berubah, hanya design-system.md yang diedit. Kalau urutan kerja berubah, hanya dokumen ini yang diedit. Ini supaya dua dokumen tidak pernah perlu diupdate bersamaan untuk hal yang sama.

---

## 1. Gate Structure

Ini mekanisme inti. Setiap gate harus **closed** sebelum gate berikutnya dibuka. "Closed" artinya semua pass criteria terpenuhi — bukan "sudah dikerjakan sebagian besar".

| Gate | Scope | Depends on | Pass Criteria | Status |
|---|---|---|---|---|
| **Gate 0 — Foundation** | `tailwind.config.ts`, `globals.css`, font setup di `layout.tsx`, `lib/utils.ts`, `types/index.ts` | Tidak ada (semua info sudah lengkap di design-system.md §2–4) | Token warna & font 1:1 sama dengan design-system.md §2; tidak ada hex inline; tidak ada `#000000`/`#ffffff` | 🟢 Closed — 2026-06-26 |
| **Gate A — Data Layer** | `src/data/projects.ts`, `stack.ts`, `experience.ts`, `achievements.ts` | Gate 0 closed (butuh `types/index.ts`) | Konten final, mengikuti copy rules design-system.md §11 (no filler phrase, no bullet di About, dst) | 🟡 Partial — `projects.ts` & `stack.ts` final; `experience.ts` & `achievements.ts` masih TODO — lihat §7 |
| **Gate B — UI Atoms & Layout Primitives** | Button, Badge, Tag, SectionLabel, ProjectCard, SectionWrapper, Navbar, Footer | Gate 0 closed | Scaffold checklist design-system.md §15 lolos 100% per komponen | 🟢 Closed — 2026-06-26 |
| **Gate C — Sections** | Hero → About → Stack → Projects → Experience → Achievements → Contact (urutan §6) | Gate A closed (butuh data) + Gate B closed (butuh atoms) | Semua section pakai `SectionWrapper`; maksimal 3 `motion.div` per section; blinking cursor cuma di Hero | 🟡 Partial — semua section dibuat & render; Experience & Achievements menunggu Gate A blocker |
| **Gate D — Integration & QA** | Assembly `page.tsx`, sticky navbar, responsive check, accessibility floor (§13), `prefers-reduced-motion`, metadata SEO | Gate C closed | Semua item di §8 Definition of Done lolos | 🟡 In Progress — assembly done, QA pending |

**Catatan dependency penting:** Gate C tidak bisa dimulai dengan benar sebelum Gate A *dan* Gate B closed. Kalau salah satu belum closed tapi kita "mulai duluan biar cepat", itu yang menciptakan rework — section ke-build dengan data placeholder atau atom yang belum stabil, lalu harus dibongkar ulang begitu Gate A/B berubah.

---

## 2. Session Start Protocol

Setiap kali mulai sesi kerja baru (baik kamu sendiri atau saya), urutan ini wajib:

1. **Cek status gate** — gate mana yang masih 🔴 Open, mana yang 🟢 Closed. Jangan kerja di gate yang depends-nya belum closed.
2. **Cek Known Blockers Register (§7)** — kalau ada blocker yang relevan dengan gate yang mau dikerjakan, selesaikan/klarifikasi blocker dulu sebelum lanjut.
3. **Baca ulang section relevan di design-system.md** — jangan andalkan memori dari sesi sebelumnya. Token, copy rules, dan component pattern harus dicek ulang dari dokumen, bukan dari asumsi.
4. **Baru mulai kerja** pada satu unit terkecil (satu komponen / satu data file / satu section) — bukan banyak unit sekaligus.

---

## 3. Per-Task Micro-Flow

Untuk setiap komponen atau section yang dikerjakan, urutan wajib:

1. **Identifikasi gate & dependency** — komponen ini masuk gate mana, dan apakah dependency-nya (data, atom lain) sudah closed?
2. **Cek `src/data/`** — kalau section butuh data dan data belum ada/belum final, **STOP**. Jangan isi dengan placeholder copy yang melanggar §11 design-system.md (misalnya "Lorem ipsum" atau filler phrase seperti "passionate developer"). Tandai sebagai blocker, lanjut ke unit lain.
3. **Build komponen** sesuai pattern di design-system.md §8 (cn(), forwardRef, font class eksplisit, dst).
4. **Self-QA pakai Scaffold Checklist** design-system.md §15 — semua item harus dicek satu-satu, bukan dilihat sekilas.
5. **Self-QA pakai Absolute Rules** design-system.md §14 (DO/DON'T) — terutama soal warna, `any`, dan hardcoded text.
6. **Mark closed** hanya kalau checklist 100% lolos. Kalau ada satu item yang gagal, statusnya tetap 🔴 Open — tidak ada "closed dengan catatan".

---

## 4. Drift Control — Aturan Saat Sesuatu Tidak Diatur di Spec

Design-system.md sudah cukup detail, tapi pasti akan ada kasus yang tidak tercakup eksplisit (misalnya: state error di form contact, breakpoint khusus, urutan tab index). Aturan ketika ini terjadi:

- **Jangan improvisasi diam-diam.** Tidak boleh menambah warna baru, font baru, library baru, atau pattern baru tanpa konfirmasi — meskipun "kelihatannya masuk akal".
- **Flag eksplisit**: sebutkan bahwa hal ini tidak diatur di design-system.md, beri 1 rekomendasi konkret beserta alasannya, lalu tunggu konfirmasi sebelum lanjut membangun.
- **Default ke yang paling konservatif** dari token yang sudah ada, bukan menciptakan token baru. Misalnya kalau butuh warna "warning", jangan buat warna baru — pertimbangkan apakah `coral` atau kombinasi opacity dari token existing sudah cukup, dan tanyakan dulu.

---

## 5. Red Flags — Sinyal "Kocar-Kacir" Sedang Terjadi

Kalau salah satu ini muncul, berhenti dan koreksi sebelum lanjut:

- Ada hex value inline di JSX/CSS yang bukan dari token Tailwind config.
- Membuat komponen baru tanpa cek dulu apakah atom yang sama sudah ada di `ui/`.
- Teks (judul, deskripsi, label) ditulis langsung di JSX, bukan diimpor dari `data/`.
- Menambah npm package yang tidak ada di daftar locked dependency (§1 design-system.md).
- Mulai build section sebelum data file-nya ada/final.
- Skip accessibility checklist "biar cepat" — `aria-hidden`, `min-h-[48px]`, `focus-visible:ring`.
- Gate ditandai closed padahal masih ada item checklist yang belum lolos.
- Menambah animasi Framer Motion tanpa mengecek `prefers-reduced-motion` sudah ter-cover.

---

## 6. Commit & Checkpoint Discipline

- Satu commit = satu unit checklist yang closed (satu komponen, satu data file, atau satu section).
- Format commit message: `[gate-x] nama-unit: deskripsi singkat` — contoh: `[gate-b] Button: add primary/ghost variants with focus-visible ring`.
- Tidak ada commit "WIP" yang dibiarkan menumpuk di history utama — kalau belum closed, kerjaan tetap di local/branch, bukan di-commit sebagai "selesai".
- Sebelum membuka gate berikutnya, semua commit di gate sebelumnya harus dalam keadaan bersih (tidak ada item checklist yang gagal).

---

## 7. Known Blockers Register

Tabel ini hidup — update setiap kali blocker baru muncul atau selesai diklarifikasi.

| Blocker | Gate terdampak | Status | Detail |
|---|---|---|---|
| Data `experience.ts` belum ada | Gate A | 🔴 Open | Belum ada draft riwayat kerja/pengalaman di design-system.md. Gate A tidak bisa closed sampai ini diisi dengan konten final (bukan placeholder). |
| Data `achievements.ts` belum ada | Gate A | 🔴 Open | Belum ada draft pencapaian/sertifikat. Sama seperti di atas — perlu konten final dari Hilman, atau scaffold struktur dulu dengan TODO eksplisit yang ditandai jelas, bukan diisi seolah-olah final. |

**Aturan untuk blocker:** kalau Gate A "ditutup" sebelum dua item ini selesai, itu pelanggaran terhadap §1 — gate harus tetap 🔴 Open sampai konten asli tersedia.

---

## 8. Definition of Done — Master Checklist per Gate

Checklist ini konsolidasi dari design-system.md, dipakai sebagai gate-closing verification — bukan pengganti §15 (Scaffold Checklist) yang dipakai per-komponen.

**Gate 0 closed jika:**
- [ ] `tailwind.config.ts` token-nya identik dengan design-system.md §2.1 & §3
- [ ] `globals.css` sudah include `prefers-reduced-motion` override
- [ ] Font loading pakai `next/font/google`, tidak ada CDN `<link>`
- [ ] `cn()` utility ada dan dipakai sebagai standar

**Gate A closed jika:**
- [ ] `projects.ts`, `stack.ts`, `experience.ts`, `achievements.ts` semua berisi konten final
- [ ] Tidak ada filler phrase yang dilarang §11 ("passionate developer", dst)
- [ ] Semua interface punya tipe eksplisit, tidak ada `any`

**Gate B closed jika:**
- [ ] Setiap atom lolos Scaffold Checklist §15 satu per satu
- [ ] Semua icon punya `strokeWidth={1.5}`
- [ ] Semua elemen interaktif punya `min-h-[48px]` dan `focus-visible:ring-2`

**Gate C closed jika:**
- [ ] Semua section dibungkus `SectionWrapper`
- [ ] Urutan section sesuai §6 design-system.md
- [ ] Maksimal 3 `motion.div` per section
- [ ] Status indicator blinking cursor hanya muncul di Hero

**Gate D closed jika:**
- [ ] `page.tsx` merangkai semua section sesuai urutan
- [ ] Accessibility floor §13 lolos semua item
- [ ] Metadata SEO (`<title>`, `<meta name="description">`) terisi
- [ ] Build static export (`next build`) tidak ada error/warning terkait `any` atau unused import

---

## 9. Escalation Protocol

Kalau di tengah proses ada hal yang bertentangan dengan spec, atau requirement baru muncul:

1. **Stop** — jangan lanjut membangun di atas asumsi.
2. **Sebutkan konflik secara eksplisit** — bagian mana yang bertentangan, dengan section apa di design-system.md atau dokumen ini.
3. **Ajukan 1 opsi resolusi konkret** beserta trade-off-nya — bukan pertanyaan terbuka tanpa arah.
4. **Tunggu konfirmasi eksplisit** sebelum lanjut. Tidak ada "saya asumsikan ini yang dimaksud" lalu jalan terus.

---

## 10. Quick Reference Cheat Sheet

Versi ringkas untuk dicek cepat saat coding — detail lengkap selalu di design-system.md.

**Token warna (jangan pernah ditukar perannya):**
`coral` → CTA & headline emphasis · `lavender` → tags/labels · `mint` → status/availability saja · `bg`/`surface`/`border` → layout · `text`/`muted` → tipografi

**Font:**
`font-display` (Space Grotesk) → H1–H3, hero · `font-body` (Inter) → paragraf · `font-mono` (JetBrains Mono) → tags, labels, status

**Larangan keras:**
`#000000` / `#ffffff` · `any` di TypeScript · CDN font · teks hardcoded di JSX · `<div onClick>` sebagai pengganti `<button>` · animasi tanpa `prefers-reduced-motion`

---

## 11. Out of Scope (referensi cepat)

Lihat design-system.md §16 untuk detail. Ringkas: tidak ada light mode, tidak ada i18n, tidak ada CMS, tidak ada blog di v1. Kalau ada permintaan untuk salah satu ini, itu otomatis masuk kategori §4 (Drift Control) — perlu konfirmasi eksplisit sebelum dikerjakan, karena bertentangan dengan scope yang sudah dikunci.
