import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">WalletAPI</h3>
            <p className="text-sm text-muted-foreground">Empowering developers with comprehensive wallet data and analysis tools.</p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wallet-lookup" className="text-muted-foreground hover:text-foreground">Wallet Lookup</Link></li>
              <li><Link href="/risk-assessment" className="text-muted-foreground hover:text-foreground">Risk Assessment</Link></li>
              <li><Link href="/transaction-analysis" className="text-muted-foreground hover:text-foreground">Transaction Analysis</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase">Stay Updated</h4>
            <p className="mb-2 text-sm text-muted-foreground">Subscribe to our newsletter for the latest updates and features.</p>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2023 WalletAPI. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/cookies" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

