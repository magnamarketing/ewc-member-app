import { Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSupportPage() {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Support</h1>
          <p className="text-gray-500 mt-1">We're here to help. Submit a ticket for any issues or questions.</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <Headphones className="w-6 h-6 text-purple-600" />
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="Enter your phone number" />
            </div>
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter the subject of your ticket" />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Please describe your issue in detail..." rows={8} />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
              Submit Ticket
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
