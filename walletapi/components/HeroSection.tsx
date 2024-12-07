import { Button } from '@/components/ui/button'
import InteractiveAPI from './InteractiveAPI'
import { Badge } from '@/components/ui/badge'

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Empowering Wallet Tracking and Compliance for Web3
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Simplify wallet analysis with accurate data, API-first integration, and secure insights.
          </p>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="text-sm">
              100+ Enterprises
            </Badge>
            <Badge variant="secondary" className="text-sm">
              99.99% Uptime
            </Badge>
            <Badge variant="secondary" className="text-sm">
              200M+ Wallets
            </Badge>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">View Documentation</Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <InteractiveAPI />
        </div>
      </div>
    </section>
  )
}

