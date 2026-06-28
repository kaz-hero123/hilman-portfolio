// src/data/projects.ts
// PRD §5 — Canonical project content. Use verbatim. Do not rephrase.
import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'rfid-attendance',
    functionTag: 'DUAL-PIPELINE ATTENDANCE SYSTEM',
    title: 'RFID Attendance System',
    subtitle: 'Backend Developer · HummaTech Indonesia',
    status: 'production',
    stack: ['Laravel', 'PHP', 'MySQL', 'Python', 'Postman'],
    repoUrl: undefined, // private repo

    problem:
      'A school needed to track gate entry and per-lesson attendance separately. A single pipeline could not reliably handle both — the entry timestamp and the teacher-verified attendance had different authorities, different triggers, and different failure modes.',
    constraints:
      'Production deployment to an active school environment. The gate RFID hardware was fixed and non-negotiable. The system had to stay up during the school day.',
    decision:
      'Dual-pipeline architecture: one pipeline exclusively for RFID gate entry (attendance_rfids table), one for teacher-managed per-lesson cross-check (attendances table). Cross-check is the sole source of truth for final attendance status. Flags computed as JOIN outputs, not stored state. Python/openpyxl tooling for the Excel import workflow that previously required manual re-entry.',
    rejectedPath:
      'A single unified pipeline that attempted to reconcile gate entry and teacher records in real time. Rejected because the two data sources have different latencies, different error rates, and different correction authorities — forcing them into one flow would have required complex conflict resolution logic that would be brittle in production.',
    outcome:
      'Deployed to production at the school. The Python tooling substantially reduced the manual effort required for Excel import — the workflow that previously required manual re-entry was automated. The dual-pipeline design remained stable through the internship period.',
    reflection:
      'I would add an explicit reconciliation audit log — a record of cases where gate entry and teacher cross-check disagreed, and how they were resolved. That data would surface patterns (habitual late entries, specific classrooms with unreliable reads) that the current design discards.',
  },
  {
    slug: 'rapor-ai',
    functionTag: 'VISION-LANGUAGE REPORT SUMMARISER',
    title: 'Rapor AI',
    subtitle: 'Solo Developer · Google JuaraVibeCoding 2026',
    status: 'prototype',
    stack: ['Node.js', 'Express', 'Gemini Vision API'],
    repoUrl: 'https://github.com/kaz-hero123/rapor-ai',

    problem:
      'Indonesian school report cards (rapor) contain dense structured data. Students and parents need different things from the same document — a student needs to understand what to improve; a parent needs a clear status signal without decoding table rows.',
    constraints:
      'Solo, time-boxed to a competition. The report card format varies across schools — the solution had to work from a photo, not a structured data export.',
    decision:
      'A single vision-language model call (Gemini Vision API) that accepts a report card photo and returns two distinct summaries in one response: a student-facing summary focused on actionable improvement areas, and a parent-facing summary focused on overall status and notable results.',
    rejectedPath:
      'Two separate API calls with different prompts. Rejected for cost and latency — a single well-structured prompt with explicit output schema is cheaper and faster, and the model has full context for both summaries in one pass.',
    outcome:
      'Prototype produces two meaningfully different summaries from the same report card image. The student summary and parent summary have different registers and different information emphasis. Submitted and completed for Google JuaraVibeCoding 2026.',
    reflection:
      'The prompt is doing a lot of work that should probably be schema-enforced — structured output (JSON mode) would make the two summaries more reliably distinct and easier to render. The current implementation parses freeform text, which is fragile.',
  },
  {
    slug: 'owlbook',
    functionTag: 'LIBRARY LIFECYCLE STATE MACHINE',
    title: 'OwlBook — Digital Library',
    subtitle: 'Solo Developer · Final Competency Exam (UKK)',
    status: 'production',
    stack: ['Laravel', 'Tailwind CSS', 'DomPDF', 'MySQL'],
    repoUrl: undefined,

    problem:
      'Manual library management at a school caused stock errors (books marked available when borrowed) and untracked fines (no systematic record of late returns). Reporting was done manually in spreadsheets.',
    constraints:
      'Solo exam project with a fixed deadline. The schema had to support RBAC across at least three roles (admin, librarian, student). PDF reporting was a hard requirement.',
    decision:
      'Full borrowing lifecycle modelled as a state machine: available → borrowed → returned (on-time) / returned (late). Fines computed from state transition timestamps, not stored. RBAC across a 7-table schema using Laravel middleware. Automated PDF reporting via DomPDF triggered from the admin panel.',
    rejectedPath:
      'Storing fine amounts as a column that gets updated on return. Rejected because it creates an audit gap — if the fine is updated after the fact, there is no record of the original due date or when the calculation was applied. Deriving fines from timestamps keeps the source of truth in the transition record.',
    outcome:
      'Completed and passed the UKK final exam. Full borrowing lifecycle functional. PDF reports generating correctly. RBAC working across admin, librarian, and student roles.',
    reflection:
      'The state machine logic lives in the controller, which made it hard to test in isolation. I would extract it to a dedicated BorrowingLifecycle service class if rebuilding — that is the one place where a service layer would have been justified.',
  },
]
