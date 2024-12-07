'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const codeExamples = {
  python: `import requests

url = "https://api.walletapi.com/v1/wallet/lookup"
headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}
response = requests.get(url, headers=headers, params={"address": "0x123..."})
print(response.json())`,
  curl: `curl -X GET "https://api.walletapi.com/v1/wallet/lookup?address=0x123..." \\
-H "Authorization: Bearer YOUR_API_KEY"`
}

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState('python')

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Quick Start</h2>
      <Card>
        <CardHeader>
          <CardTitle>API Usage Example</CardTitle>
          <CardDescription>Choose your preferred language</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="python" onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="curl">cURL</TabsTrigger>
            </TabsList>
            <TabsContent value="python">
              <pre className="language-python">
                <code>{codeExamples.python}</code>
              </pre>
            </TabsContent>
            <TabsContent value="curl">
              <pre className="language-bash">
                <code>{codeExamples.curl}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}

