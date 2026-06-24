'use client'

import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ui/mode-toggle'
import { ShieldCheck, Home, FolderOpen, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useTransitionRouter } from 'next-view-transitions'
import { getPageAnimation } from '@/lib/animations'

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Certificates', href: '/certificates', icon: ShieldCheck },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
]

const Navbar = () => {
  const router =  useTransitionRouter()
  const pathname = usePathname()


  return (
    <nav className='fixed top-12 left-1/2 -translate-x-1/2 z-50 w-fit rounded-full border border-border bg-background/70 shadow-xl px-2 py-2 backdrop-blur-sm'>
      <ul className='flex items-center gap-2 rounded-full px-2 py-1 text-base'>
        {navLinks.map(({ label, href, icon: Icon }) => {
          const isActive = href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(href + '/')

          return (
            <li key={href} className="relative px-1 py-1">
              <Link 
                href={href}
                onClick={(e) => {e.preventDefault()
                  router.push(href, {onTransitionReady: getPageAnimation(pathname, href),})
                }} 
                aria-label={label} 
                className={`relative z-10 flex h-9 items-center justify-center rounded-full px-4 py-1 transition-colors duration-200 ${isActive ? 'text-accent-foreground' : 'text-foreground/80'} hover:text-accent-foreground`}>
                <Icon className='h-5 w-5 md:h-4 md:w-4' />
                <span className="hidden md:inline ml-2">{label}</span>
              </Link>
              
              {isActive && (
                <motion.div layoutId="active-pill" className="absolute inset-0 z-0 rounded-full bg-accent" transition={{ type: 'spring', stiffness: 380, damping: 30 }}/>
              )}
            </li>
          )
        })}
        <li className="relative z-10 ml-2"><ModeToggle /></li>
      </ul>
    </nav>
  )
}

export default Navbar
