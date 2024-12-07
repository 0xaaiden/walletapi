import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const tiers = [
  {
    name: "Free",
    description: "For small projects and testing",
    price: "$0",
    features: [
      "Limited API calls per month",
      "Basic wallet data and labels",
      "Community support"
    ]
  },
  {
    name: "Pro",
    description: "For growing businesses",
    price: "$99",
    features: [
      "Higher API call limits",
      "Real-time updates",
      "Priority support",
      "Advanced wallet data"
    ]
  },
  {
    name: "Enterprise",
    description: "For large-scale operations",
    price: "Custom",
    features: [
      "Unlimited API calls",
      "Custom integrations",
      "Dedicated support team",
      "Advanced features (risk assessments, compliance)"
    ]
  }
]

export default function Pricing() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Pricing Plans</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((tier, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-3xl font-bold">{tier.price}</p>
              <ul className="space-y-2">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Plan</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

