'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { fadeInUp, stagger } from '../utils/animations'

const features = [
  "Scalable: Handles millions of requests per second",
  "Accurate Labels: Real-time updates for over 200M wallets",
  "Secure: Fully encrypted and compliant with major privacy regulations",
  "Flexible Integration: Supports RESTful and GraphQL APIs"
]

export default function FeatureOverview() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-8 text-center text-3xl font-bold"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          Key Features
        </motion.h2>
        <motion.ul 
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-center space-x-2"
              variants={fadeInUp}
            >
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

