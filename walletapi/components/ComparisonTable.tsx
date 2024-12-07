import { Check, X } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const features = [
  { name: 'Real-time wallet analysis', walletApi: true, competitor1: true, competitor2: false },
  { name: 'Multi-chain support', walletApi: true, competitor1: false, competitor2: true },
  { name: 'AI-powered risk assessment', walletApi: true, competitor1: false, competitor2: false },
  { name: 'Custom labeling', walletApi: true, competitor1: true, competitor2: true },
  { name: 'Transaction pattern recognition', walletApi: true, competitor1: false, competitor2: true },
  { name: 'Unlimited API calls', walletApi: true, competitor1: false, competitor2: false },
  { name: '24/7 dedicated support', walletApi: true, competitor1: false, competitor2: false },
]

export default function ComparisonTable() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How We Compare</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">Feature</TableHead>
                <TableHead className="w-1/4 text-center">
                  <Badge variant="outline" className="bg-primary text-primary-foreground">
                    Wallet API
                  </Badge>
                </TableHead>
                <TableHead className="w-1/4 text-center">Competitor 1</TableHead>
                <TableHead className="w-1/4 text-center">Competitor 2</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{feature.name}</TableCell>
                  <TableCell className="text-center">
                    {feature.walletApi ? (
                      <Check className="inline-block text-green-500" />
                    ) : (
                      <X className="inline-block text-red-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitor1 ? (
                      <Check className="inline-block text-green-500" />
                    ) : (
                      <X className="inline-block text-red-500" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitor2 ? (
                      <Check className="inline-block text-green-500" />
                    ) : (
                      <X className="inline-block text-red-500" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}

