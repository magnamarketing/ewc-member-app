import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Megaphone, BookOpen, LifeBuoy, ArrowRight } from "lucide-react"
import Link from "next/link"

const announcements = [
  {
    date: "July 25, 2025",
    title: "New 'Premium Plus' Wash Package Launching August 1st!",
  },
  {
    date: "July 20, 2025",
    title: "System Maintenance Scheduled for this Sunday at 2 AM.",
  },
  {
    date: "July 15, 2025",
    title: "Reminder: Q3 Performance Reviews are due next week.",
  },
]

const faqLinks = [
  { title: "How do I add a new customer?", href: "/faqs" },
  { title: "What info is required to create a profile?", href: "/faqs" },
  { title: "How do I edit customer details?", href: "/faqs" },
]

export default function OverviewPage() {
  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome, Moo Moo Express - Main St!</h1>
        <p className="text-gray-500 mt-1">Here's a quick overview of your dashboard.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Announcements Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Megaphone className="w-6 h-6 text-purple-600" />
              <span>Announcements</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-4">
              {announcements.map((item, index) => (
                <li key={index}>
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Knowledge / FAQ Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-purple-600" />
              <span>Knowledge / FAQ</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-3">
              {faqLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="flex justify-between items-center group text-gray-700 hover:text-purple-600"
                  >
                    <span>{link.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/faqs">View all FAQs</Link>
            </Button>
          </CardFooter>
        </Card>

        {/* Support Form Card */}
        <Card className="lg:col-span-2 flex flex-col">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LifeBuoy className="w-6 h-6 text-purple-600" />
              <span>Quick Support Form</span>
            </CardTitle>
            <CardDescription>Need help? Submit a ticket directly from your dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <form className="space-y-4">
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="e.g., Issue with customer account" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Please describe the issue in detail..." />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit Ticket</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
