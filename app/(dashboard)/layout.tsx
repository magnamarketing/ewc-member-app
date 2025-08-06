"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Home, Search, UserPlus, HelpCircle, Headphones, Shield, Info, LogOut, BookOpen } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

function Sidebar() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", icon: <Home className="w-6 h-6" />, label: "Overview" },
    { href: "/wash-packages", icon: <BookOpen className="w-6 h-6" />, label: "Wash Packages" },
    { href: "/register-member", icon: <UserPlus className="w-6 h-6" />, label: "Member Registration" },
    { href: "/member-search", icon: <Search className="w-6 h-6" />, label: "Member Search" },
    { href: "/faqs", icon: <HelpCircle className="w-6 h-6" />, label: "FAQ" },
    { href: "/contact-support", icon: <Headphones className="w-6 h-6" />, label: "Contact Support" },
  ]

  return (
    <aside className="w-72 flex-shrink-0 bg-sidebar-bg text-sidebar-text flex flex-col p-6 space-y-8">
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-white to-gray-100 p-4 rounded-xl shadow-sm">
          <Image src="/logo.png" alt="Express Wash Concepts Logo" width={200} height={100} />
        </div>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <SidebarLink key={link.href} href={link.href} icon={link.icon} active={pathname === link.href}>
              {link.label}
            </SidebarLink>
          ))}
        </ul>

        <div className="mt-10">
          <h3 className="px-3 text-xs font-semibold uppercase text-gray-500 mb-4">Others</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/terms-and-conditions" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700">
                <Shield className="w-6 h-6" />
                <span>Terms & Conditions</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700">
                <Info className="w-6 h-6" />
                <span>Privacy Policy</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="border-t border-gray-700 pt-6">
        <div className="flex items-center justify-between">
          <Link href="/profile" className="flex items-center gap-4 group">
            <Avatar>
              <AvatarImage
                src="/location-photo-cropped.jpeg"
                alt="Moo Moo Express - Main St"
                className="object-cover"
              />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="font-semibold text-white group-hover:text-purple-300">Moo Moo Express - Main St</p>
              <p className="text-sm">mainst@moomoo.com</p>
            </div>
          </Link>
          <button className="text-gray-400 hover:text-white">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </aside>
  )
}

function SidebarLink({
  href,
  active,
  icon,
  children,
}: {
  href: string
  active: boolean
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700",
          active && "bg-sidebar-active-bg text-sidebar-active-text font-semibold",
        )}
      >
        {icon}
        <span>{children}</span>
      </Link>
    </li>
  )
}



export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8 flex flex-col">{children}</main>
      </div>
    </div>
  )
}
