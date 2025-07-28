"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Gavel, Laptop, CreditCard, Shield, Clock, MessageSquare, Ticket } from "lucide-react"
import { cn } from "@/lib/utils"

const faqCategories = [
  { id: "legal", name: "Legal", icon: <Gavel className="w-5 h-5" /> },
  { id: "software", name: "Software Issues", icon: <Laptop className="w-5 h-5" /> },
  { id: "purchase", name: "Purchase Requests", icon: <CreditCard className="w-5 h-5" /> },
  { id: "safety", name: "Site Safety", icon: <Shield className="w-5 h-5" /> },
  { id: "absence", name: "Leave of Absence", icon: <Clock className="w-5 h-5" /> },
]

const faqs = {
  legal: [
    {
      question: "How do I add a new customer?",
      answer:
        "Go to the Customers tab, click “Add New”, then fill out the required fields like name, phone number, and vehicle info. Hit Save to finish.",
    },
    {
      question: "What info is required to create a profile?",
      answer:
        "You need the customer's full name, a valid phone number, and basic vehicle information (make, model, license plate).",
    },
    {
      question: "How do I edit customer details?",
      answer: "Search for the customer, click on their profile, and use the edit icon to update their information.",
    },
    {
      question: "Can I update memberships or packages?",
      answer:
        "Yes, on the customer's profile page, you can select a new service plan from the 'Services & Payment' section.",
    },
    {
      question: "What if a customer has duplicate accounts?",
      answer: "Please submit a support ticket with the details of both accounts, and our team will merge them for you.",
    },
    {
      question: "How many vehicles can a customer add?",
      answer:
        "Each customer profile is associated with one primary vehicle. For additional vehicles, a new profile must be created.",
    },
    {
      question: "How do I view a customer's profile summary?",
      answer:
        "Simply search for the customer and click on their name in the search results to view their full profile summary.",
    },
  ],
  // Add other categories' FAQs here
}

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("legal")

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">FAQs</h1>
          <p className="text-gray-500 mt-1">Your questions answered here.</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <HelpCircle className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <ul className="space-y-2">
              {faqCategories.map((category) => (
                <li key={category.id}>
                  <Button
                    variant="ghost"
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full justify-start gap-3 text-gray-600",
                      activeCategory === category.id && "bg-purple-100 text-purple-700 font-semibold",
                    )}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3">
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {(faqs[activeCategory] || []).map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-green-200 to-cyan-200">
        <div className="flex flex-col items-center text-center">
          <div className="bg-white/50 p-3 rounded-full mb-4">
            <MessageSquare className="w-8 h-8 text-purple-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Do you have more questions?</h2>
          <p className="text-gray-600 mt-2 max-w-md">
            Submit a ticket through our support page — we're ready to assist you with any questions or issues.
          </p>
          <Button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg">
            <Ticket className="mr-2 h-5 w-5" />
            Submit a Ticket
          </Button>
        </div>
      </div>
    </div>
  )
}
