import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

const features = [
  {
    title: "Wallet Lookup",
    description: "Get comprehensive details about any wallet across multiple blockchains.",
    badges: ["Multi-chain", "Real-time", "Detailed"],
    color: "primary"
  },
  {
    title: "Risk Assessment",
    description: "Evaluate the risk profile of wallets based on their transaction history and associations.",
    badges: ["AI-powered", "Customizable", "Compliance-ready"],
    color: "secondary"
  },
  {
    title: "Transaction Analysis",
    description: "Analyze individual transactions or entire transaction histories for patterns and insights.",
    badges: ["Historical data", "Pattern recognition", "Visualizations"],
    color: "accent"
  },
  {
    title: "Wallet Labeling",
    description: "Automatically categorize and label wallets based on their behavior and characteristics.",
    badges: ["Machine learning", "Custom labels", "Bulk processing"],
    color: "primary"
  }
]

export default function ApiFeatures() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold gradient-text">Powerful API Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className={`text-${feature.color}`}>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{feature.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge, badgeIndex) => (
                      <Badge key={badgeIndex} variant="secondary" className="bg-accent text-accent-foreground">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

