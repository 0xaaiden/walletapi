import { motion } from 'framer-motion'

const stats = [
  { label: "API Calls / Day", value: "10M+" },
  { label: "Wallets Tracked", value: "100M+" },
  { label: "Supported Chains", value: "20+" },
  { label: "Customer Satisfaction", value: "99.9%" },
]

export default function Stats() {
  return (
    <section className="bg-primary py-12 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

