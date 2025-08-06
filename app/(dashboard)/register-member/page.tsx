"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  UserPlus,
  Mail,
  Car,
  CreditCard,
  Scan,
  CheckCircle2,
  BookOpen,
  Smile,
  Gem,
} from "lucide-react"
import { cn } from "@/lib/utils"

const membershipPlans = [
  {
    id: "basic",
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    name: "Basic Wash",
    brand: "Moo Moo Express",
    description: "Standard car wash with basic cleaning products",
    price: "$9.99",
  },
  {
    id: "premium",
    icon: <Smile className="w-5 h-5 text-purple-600" />,
    name: "Premium Wash",
    brand: "Moo Moo Express",
    description: "Premium car wash with premium products and extra services",
    price: "$29.99",
  },
  {
    id: "unlimited",
    icon: <Gem className="w-5 h-5 text-purple-600" />,
    name: "Unlimited Premium",
    brand: "Moo Moo Express",
    description: "Unlimited premium car washes with all premium products",
    price: "$79.99",
  },
  {
    id: "express",
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    name: "Express Wash",
    brand: "Moo Moo Express",
    description: "Quick 10-minute express car wash service",
    price: "$4.99",
  },
  {
    id: "deluxe",
    icon: <Smile className="w-5 h-5 text-purple-600" />,
    name: "Deluxe Wash",
    brand: "Moo Moo Express",
    description: "Deluxe wash with interior cleaning and waxing",
    price: "$39.99",
  },
  {
    id: "ultimate",
    icon: <Gem className="w-5 h-5 text-purple-600" />,
    name: "Ultimate Package",
    brand: "Moo Moo Express",
    description: "Complete detailing with premium products and protection",
    price: "$99.99",
  },
  {
    id: "monthly",
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    name: "Monthly Unlimited",
    brand: "Moo Moo Express",
    description: "Unlimited washes for 30 days",
    price: "$49.99",
  },
  {
    id: "annual",
    icon: <Smile className="w-5 h-5 text-purple-600" />,
    name: "Annual Membership",
    brand: "Moo Moo Express",
    description: "Full year of unlimited premium washes",
    price: "$399.99",
  },
]

export default function RegisterCustomerPage() {
  const [selectedMembership, setSelectedMembership] = useState("premium")
  const [showMoreOptions, setShowMoreOptions] = useState(false)

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Register New Member</h1>
          <p className="text-gray-500 mt-1">Add a new member's details to the system.</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <UserPlus className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <form className="space-y-8">
          {/* Team Member */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Team Member <span className="text-red-500">*</span></h2>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Search for team member..." />
                </SelectTrigger>
                <SelectContent>
                  <div className="p-2">
                    <Input placeholder="Search team members..." className="mb-2" />
                  </div>
                  <SelectItem value="1001">1001 - Jon Doe</SelectItem>
                  <SelectItem value="1002">1002 - Jane Smith</SelectItem>
                  <SelectItem value="1003">1003 - Mike Johnson</SelectItem>
                  <SelectItem value="1004">1004 - Sarah Wilson</SelectItem>
                  <SelectItem value="1005">1005 - David Brown</SelectItem>
                  <SelectItem value="1006">1006 - Lisa Davis</SelectItem>
                  <SelectItem value="1007">1007 - Tom Miller</SelectItem>
                  <SelectItem value="1008">1008 - Amy Garcia</SelectItem>
                  <SelectItem value="1009">1009 - Chris Rodriguez</SelectItem>
                  <SelectItem value="1010">1010 - Emma Martinez</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 mt-1">Select the team member who will be responsible for this customer</p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                <Input id="firstName" placeholder="e.g., John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input id="lastName" placeholder="e.g., Smith" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input id="phone" type="tel" placeholder="e.g., (555) 123-4567" />
              </div>
              <div className="relative">
                <Label htmlFor="email">Email Address</Label>
                <Mail className="absolute left-3 top-10 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" placeholder="e.g., john.smith@example.com" className="pl-10" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="barcode">Barcode <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-grow">
                    <Scan className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="barcode" placeholder="e.g., 123456789012" className="pl-10 font-mono" />
                  </div>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                    title="Scan barcode with camera"
                  >
                    <Scan className="mr-2 h-4 w-4" />
                    Scan
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Click to scan barcode automatically</p>
              </div>
            </div>
          </div>

          {/* Vehicle Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Vehicle Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="vehicleMake">Make</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select car make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="Honda">Honda</SelectItem>
                    <SelectItem value="Ford">Ford</SelectItem>
                    <SelectItem value="Chevrolet">Chevrolet</SelectItem>
                    <SelectItem value="Nissan">Nissan</SelectItem>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="Mercedes-Benz">Mercedes-Benz</SelectItem>
                    <SelectItem value="Audi">Audi</SelectItem>
                    <SelectItem value="Volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="Hyundai">Hyundai</SelectItem>
                    <SelectItem value="Kia">Kia</SelectItem>
                    <SelectItem value="Mazda">Mazda</SelectItem>
                    <SelectItem value="Subaru">Subaru</SelectItem>
                    <SelectItem value="Lexus">Lexus</SelectItem>
                    <SelectItem value="Acura">Acura</SelectItem>
                    <SelectItem value="Infiniti">Infiniti</SelectItem>
                    <SelectItem value="Volvo">Volvo</SelectItem>
                    <SelectItem value="Porsche">Porsche</SelectItem>
                    <SelectItem value="Jaguar">Jaguar</SelectItem>
                    <SelectItem value="Land Rover">Land Rover</SelectItem>
                    <SelectItem value="Jeep">Jeep</SelectItem>
                    <SelectItem value="Dodge">Dodge</SelectItem>
                    <SelectItem value="Chrysler">Chrysler</SelectItem>
                    <SelectItem value="Buick">Buick</SelectItem>
                    <SelectItem value="Cadillac">Cadillac</SelectItem>
                    <SelectItem value="Lincoln">Lincoln</SelectItem>
                    <SelectItem value="Tesla">Tesla</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="vehicleModel">Model</Label>
                <Input id="vehicleModel" placeholder="e.g., 2024 Corolla" />
              </div>
              <div>
                <Label htmlFor="vehiclePlate">Vehicle Plate <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="vehiclePlate" placeholder="e.g., ABC-1234" className="pl-10" required />
                </div>
              </div>
            </div>
          </div>

          {/* Membership Information */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Membership Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {membershipPlans.slice(0, 3).map((plan) => (
                <div key={plan.id}>
                  <input
                    type="radio"
                    id={plan.id}
                    name="membership"
                    value={plan.id}
                    checked={selectedMembership === plan.id}
                    onChange={(e) => setSelectedMembership(e.target.value)}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={plan.id}
                    className={cn(
                      "flex flex-col p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all hover:border-purple-300",
                      "peer-checked:border-purple-600 peer-checked:bg-purple-50",
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">{plan.icon}</div>
                        <div>
                          <span className="font-semibold">{plan.name}</span>
                          <p className="text-sm text-gray-500">{plan.brand}</p>
                        </div>
                      </div>
                      {selectedMembership === plan.id && <CheckCircle2 className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="mt-4">
                      <span className="text-2xl font-bold">{plan.price}</span>
                      <span className="text-gray-500"> per month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                  </Label>
                </div>
              ))}
            </div>
            
            {/* Expandable More Options */}
            <div className="space-y-4">
              {!showMoreOptions && (
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
                  <div className="relative">
                    <Button 
                      type="button"
                      variant="outline" 
                      className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                      onClick={() => setShowMoreOptions(!showMoreOptions)}
                    >
                      <span>Show all</span>
                      <svg 
                        className="w-4 h-4 ml-2 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
              
              {showMoreOptions && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {membershipPlans.slice(3).map((plan) => (
                      <div key={plan.id}>
                        <input
                          type="radio"
                          id={plan.id}
                          name="membership"
                          value={plan.id}
                          checked={selectedMembership === plan.id}
                          onChange={(e) => setSelectedMembership(e.target.value)}
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor={plan.id}
                          className={cn(
                            "flex flex-col p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all hover:border-purple-300",
                            "peer-checked:border-purple-600 peer-checked:bg-purple-50",
                          )}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex items-center gap-3">
                              <div className="bg-purple-100 p-2 rounded-full">{plan.icon}</div>
                              <div>
                                <span className="font-semibold">{plan.name}</span>
                                <p className="text-sm text-gray-500">{plan.brand}</p>
                              </div>
                            </div>
                            {selectedMembership === plan.id && <CheckCircle2 className="h-5 w-5 text-purple-600" />}
                          </div>
                          <div className="mt-4">
                            <span className="text-2xl font-bold">{plan.price}</span>
                            <span className="text-gray-500"> per month</span>
                          </div>
                          <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                        </Label>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    type="button"
                    variant="outline" 
                    className="w-full border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-200"
                    onClick={() => setShowMoreOptions(!showMoreOptions)}
                  >
                    <span>Show Less</span>
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-200 rotate-180" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Payment Information <span className="text-red-500">*</span></h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-grow">
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="cardNumber" placeholder="e.g., **** **** **** 1234" className="pl-10" required />
                  </div>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 hover:scale-105 active:scale-95"
                    title="Scan credit card with camera"
                  >
                    <Scan className="mr-2 h-4 w-4" />
                    Scan Card
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Click to scan your credit card automatically</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry MM/YY <span className="text-red-500">*</span></Label>
                  <Input id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV <span className="text-red-500">*</span></Label>
                  <Input id="cvv" placeholder="CVV" required />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZipCode <span className="text-red-500">*</span></Label>
                  <Input id="zipCode" placeholder="ZipCode" required />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end items-center gap-4 pt-4 border-t">
            <Button type="button" variant="ghost">
              Cancel
            </Button>
            <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
              Register Member
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-grow bg-gradient-to-b from-lime-200 via-cyan-200 to-white rounded-2xl mt-8"></div>
    </div>
  )
}
