import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from './Button'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 200)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-9 right-6 z-[5]"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-fit"
          >
            <Button variant="secondary" onClick={handleClick}>
              ^ Top ^
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
