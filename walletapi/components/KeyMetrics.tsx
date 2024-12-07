'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fadeInUp, stagger } from '../utils/animations'

const metrics = [
  { title: "Uptime", value: "99.99%", icon: "⏱️" },
  { title: "Response Time", value: "<200ms", icon: "⚡" },
  { title: "Total Wallets Labeled", value: "200M+", icon: "🏷️" },
  { title: "Geographic Coverage", value: "Global", icon: "🌍" }
]

export default function KeyMetrics() {
  return (
    <section className="container mx-auto px-4 py-16">
      <motion.h2 
        className="mb-8 text-center text-3xl font-bold"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        Key Metrics
      </motion.h2>
      <motion.div 
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {metrics.map((metric, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {metric.title}
                </CardTitle>
                <span className="text-2xl">{metric.icon}</span>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

