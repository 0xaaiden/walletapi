'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function InteractiveAPI() {
  const [walletAddress, setWalletAddress] = useState('')
  const [result, setResult] = useState<null | { label: string; type: string }>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setResult({
      label: 'Exchange',
      type: walletAddress.startsWith('0x') ? 'High-Risk' : 'Low-Risk'
    })
    setLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Try Wallet API</CardTitle>
        <CardDescription>Enter a wallet address to get instant results</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter wallet address (e.g., 0x1234...)"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Analyzing...' : 'Analyze Wallet'}
          </Button>
        </form>
      </CardContent>
      {result && (
        <CardFooter>
          <div className="w-full">
            <h4 className="font-semibold mb-2">Result:</h4>
            <p>Label: {result.label}</p>
            <p>Type: {result.type}</p>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}

