'use client'

import React, { useEffect, useState } from 'react'
import { ModeToggle } from './mode-toggle'
import {ShieldCheck, Home, FolderOpen, GraduationCap, Mail } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Certificates', href: '/about', icon: ShieldCheck },
  { label: 'Projects', href: '/projects', icon: FolderOpen },
  { label: 'Contact', href: '/contact', icon: Mail },
]

const Navbar = () => {

  const pathname = usePathname()  
  

  return (
    <nav className='fixed top-13 left-2 right-2 z-50 w-fit mx-auto rounded-full border border-border bg-background/70 shadow-xl/30 px-0 md:px-0 py-2 backdrop-blur-sm'>
      <ul className='flex items-center gap-4 md:gap-4 lg:gap-1 rounded-full px-2 md:px-5 py-2 md:py-1 text-[5px] md:text-base'>
        {navLinks.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href

          return (
            <li key={href} className="px-1 md:px-3 py-1 hover:text-neutral-400">
              <Link
              href={href}
              aria-label={href}
              className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ease-out md:h-auto md:w-auto md:px-2 md:py-1
              ${isActive 
              ? 'scale-105 bg-accent text-accent-foreground'
              : 'scale-100 text-muted-foreground hover:text-foreground'
              }`}>
                <Icon className='h-5 w-5 md:h-4 md:w-4' />
                <span className="hidden md:inline ml-2">{label}</span>
              </Link>
            </li>
)})}
        <li><ModeToggle /></li>
      </ul>
    </nav>
  )
}

export default Navbar
