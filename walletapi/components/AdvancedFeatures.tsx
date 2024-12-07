import { Shield, Globe, Tag, Activity, Database } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Cybersecurity and Compliance",
    description: "Detect high-risk wallets with real-time monitoring and identify wallet activity across geographic regions."
  },
  {
    icon: Tag,
    title: "Custom Labels",
    description: "Allow enterprises to add proprietary labels to wallets for enhanced tracking and analysis."
  },
  {
    icon: Activity,
    title: "Live Market Feed Integration",
    description: "Stay updated on wallet activity with real-time data streams for immediate insights."
  },
  {
    icon: Database,
    title: "Bulk Processing",
    description: "Upload CSV files for batch wallet analysis, perfect for large-scale operations."
  }
]

export default function AdvancedFeatures() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Advanced Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <feature.icon className="mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

