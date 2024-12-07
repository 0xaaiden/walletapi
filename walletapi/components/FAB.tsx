'use client'

import { Book } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function FAB() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button size="lg" className="rounded-full p-4">
        <Book className="h-6 w-6" />
        <span className="sr-only">View Documentation</span>
      </Button>
    </motion.div>
  )
}

