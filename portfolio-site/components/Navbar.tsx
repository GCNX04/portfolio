'use client'

import React from 'react'
import { ModeToggle } from './mode-toggle'
import { Menu, X, User, Home, FolderOpen, GraduationCap, Mail} from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: FolderOpen },
  { label: 'Education', href: '#education', icon: GraduationCap },
  { label: 'Contact', href: '#contact', icon: Mail },
]

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <nav className='fixed top-13 left-2 right-2 z-50 w-fit mx-auto rounded-full border border-neutral-600 shadow-xl/30 px-0 md:px-0 py-2 backdrop-blur-sm'>
      <ul className='flex items-center gap-0 md:gap-4 lg:gap-1 rounded-full px-2 md:px-5 py-2 md:py-1 text-[5px] md:text-base'>
       {navLinks.map(({ label, href, icon: Icon }) => (
        <li key={href} className="px-1 md:px-3 py-1 hover:text-neutral-400">
          <a href={href} className="flex items-center gap-0">
            <Icon size={14} className="hidden md:block" />
            <span className="ml-2">{label}</span>
          </a>
        </li>
      ))}
      <li><ModeToggle /></li>
      </ul>
    </nav>
  )
}

export default Navbar
