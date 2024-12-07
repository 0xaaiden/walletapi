'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Shield, Globe, Copy } from 'lucide-react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const sampleApiResponse = {
  address: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
  label: "Binance Hot Wallet",
  type: "Exchange",
  risk_score: 15,
  total_received: "1234567.89 ETH",
  total_sent: "1234000.00 ETH",
  balance: "567.89 ETH",
  last_active: "2023-05-01T12:34:56Z",
  tags: ["exchange", "high-volume", "verified"],
  transactions: [
    {
      hash: "0x1234...5678",
      value: "100.00 ETH",
      timestamp: "2023-05-01T10:30:00Z",
      type: "outgoing"
    },
    {
      hash: "0x5678...1234",
      value: "50.00 ETH",
      timestamp: "2023-05-01T11:45:00Z",
      type: "incoming"
    }
  ]
}

export default function Hero() {
  const [walletAddress, setWalletAddress] = useState('')
  const [apiResponse, setApiResponse] = useState(null)
  const [activeTab, setActiveTab] = useState('json')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setApiResponse(sampleApiResponse)
  }

  const generateRandom = () => {
    const randomAddress = '0x' + Array(40).fill(0).map(() => Math.random().toString(16)[2]).join('')
    setWalletAddress(randomAddress)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const features = [
    { icon: Zap, text: "Lightning-fast API responses" },
    { icon: Shield, text: "Bank-grade security measures" },
    { icon: Globe, text: "Global coverage of wallets" },
    { icon: CheckCircle, text: "99.99% uptime guarantee" },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold gradient-text">
            Comprehensive Wallet API for Blockchain Analysis
          </h1>
          <p className="mb-6 text-lg text-muted-foreground">
            Empower your applications with real-time wallet data, risk assessment, and transaction analysis across multiple blockchains.
          </p>
          <div className="mb-6 flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-primary text-primary-foreground">10M+ API calls/day</Badge>
            <Badge variant="secondary" className="bg-secondary text-secondary-foreground">100M+ Wallets tracked</Badge>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">20+ Supported chains</Badge>
          </div>
          <ul className="mb-6 grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <span>{feature.text}</span>
              </motion.li>
            ))}
          </ul>
          <div className="space-x-4">
            <Button variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">View Documentation</Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start Free Trial</Button>
          </div>
        </motion.div>
        <motion.div 
          className="rounded-lg border bg-card p-4 shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="mb-4 flex space-x-2">
            <Input
              type="text"
              placeholder="Enter wallet address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Analyze</Button>
            <Button type="button" variant="outline" onClick={generateRandom}>
              Random
            </Button>
          </form>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
            <TabsList>
              <TabsTrigger value="json">JSON</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            <TabsContent value="json">
              <pre className="relative max-h-80 overflow-auto rounded-lg bg-muted p-4 text-sm">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard(JSON.stringify(apiResponse, null, 2))}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <code>{apiResponse ? JSON.stringify(apiResponse, null, 2) : '// API response will appear here'}</code>
              </pre>
            </TabsContent>
            <TabsContent value="curl">
              <pre className="relative max-h-80 overflow-auto rounded-lg bg-muted p-4 text-sm">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-2"
                  onClick={() => copyToClipboard(`curl -X GET "https://api.walletapi.com/v1/wallet/${walletAddress}" \\\n-H "Authorization: Bearer YOUR_API_KEY"`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <code>{`curl -X GET "https://api.walletapi.com/v1/wallet/${walletAddress}" \\\n-H "Authorization: Bearer YOUR_API_KEY"`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  )
}

