'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Wallet, Menu } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Wallet className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-primary">WalletAPI</span>
        </Link>
        <nav className="hidden space-x-4 md:flex">
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">About</Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link>
          <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">Docs</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-8 w-8">
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Log In</Link>
          </Button>
          <Button size="sm">Sign Up</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/pricing">Pricing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/blog">Blog</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/docs">Docs</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

