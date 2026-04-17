import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/** Initial route paint — quick brand pulse before content reveals. */
export function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.div
              className="h-14 w-14 rounded-2xl border border-border bg-surface/80 shadow-[0_0_40px_rgba(34,211,238,0.2)]"
              initial={{ scale: 0.92, opacity: 0.6 }}
              animate={{ scale: [0.92, 1, 0.98], opacity: [0.6, 1, 0.85] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-cyan/30 via-neon-blue/10 to-neon-purple/30 blur-xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
