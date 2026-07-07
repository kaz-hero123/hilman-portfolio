'use client'

import { motion } from 'framer-motion'

export function WavyDivider() {
  return (
    <div className="w-full overflow-hidden flex justify-center py-4">
      <svg
        width="100%"
        height="20"
        preserveAspectRatio="none"
        viewBox="0 0 1200 20"
        className="stroke-ash fill-transparent max-w-[1400px]"
      >
        <motion.path
          d="M0 10 Q 150 20, 300 10 T 600 10 T 900 10 T 1200 10"
          strokeWidth="1"
          initial={{ d: "M0 10 Q 150 10, 300 10 T 600 10 T 900 10 T 1200 10" }}
          animate={{
            d: [
              "M0 10 Q 150 10, 300 10 T 600 10 T 900 10 T 1200 10",
              "M0 10 Q 150 20, 300 10 T 600 10 T 900 10 T 1200 10",
              "M0 10 Q 150 0, 300 10 T 600 10 T 900 10 T 1200 10",
              "M0 10 Q 150 10, 300 10 T 600 10 T 900 10 T 1200 10",
            ]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  )
}
