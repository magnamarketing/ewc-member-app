"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Pencil, Mail, HelpCircle, Car, CreditCard, Scan, Wifi, CheckCircle2, BookOpen, Smile, Gem } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    id: "basic",
    icon: <BookOpen className="w-5 h-5 text-purple-600" />,
    name: "Basic plan (Default)",
    price: "$10",
    description: "Includes up to 10 users, 20GB individual data and access to all features.",
  },
  {
    id: "business",
    icon: <Smile className="w-5 h-5 text-purple-600" />,
    name: "Business plan",
    price: "$20",
    description: "Includes up to 20 users, 40GB individual data and access to all features.",
  },
  {
    id: "secret",
    icon: <Gem className="w-5 h-5 text-purple-600" />,
    name: "Secret plan",
    price: "$80",
    description: "Unlimited users, unlimited individual data and access to all features.",
  },
]

const memberData = {
  firstName: "Jordan",
  lastName: "Mercer",
  email: "jordan.mercer@sampledomain.com",
  phone: "+1 (416) 555-2910",
  phoneRegion: "nj",
  vehicleBrand: "Toyota - 2024 Corolla",
  licensePlate: "ZXQ-8493",
  location: "downtown",
  rfid: "9876543",
  plan: "basic",
  paymentMethod: "**** **** **** 1234",
  expDate: "**/**",
  cvc: "***",
}

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const [selectedPlan, setSelectedPlan] = useState(memberData.plan)

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jordan Mercer</h1>
          <p className="text-gray-500 mt-1">Update Jordan's details</p>
        </div>
        <Button variant="ghost" size="icon" className="bg-purple-100 hover:bg-purple-200 rounded-full">
          <Pencil className="w-6 h-6 text-purple-600" />
        </Button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <form className="space-y-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Personal Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue={memberData.firstName} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue={memberData.lastName} />
              </div>
              <div className="relative">
                <Label htmlFor="email">Email Address</Label>
                <Mail className="absolute left-3 top-10 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" defaultValue={memberData.email} className="pl-10" />
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-[80px] h-10 px-3 text-sm border border-input bg-background rounded-md">
                    +1
                  </div>
                  <Input id="phone" type="tel" defaultValue={memberData.phone} />
                  <HelpCircle className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Vehicle Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <Label htmlFor="brand">Brand</Label>
                <Input id="brand" defaultValue={memberData.vehicleBrand} />
              </div>
              <div className="md:col-span-1">
                <Label htmlFor="licensePlate">License Plate</Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="licensePlate" defaultValue={memberData.licensePlate} className="pl-10" />
                </div>
              </div>
              <div className="md:col-span-1">
                <Label htmlFor="location">Location</Label>
                <Select defaultValue={memberData.location}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="downtown">Downtown Branch</SelectItem>
                    <SelectItem value="uptown">Uptown Branch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="rfid">RFID Number</Label>
                <div className="relative">
                  <Wifi className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="rfid" defaultValue={memberData.rfid} className="pl-10" />
                </div>
              </div>
              <div className="md:col-span-1 self-end">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  <Scan className="mr-2 h-4 w-4" />
                  Update RFID
                </Button>
              </div>
            </div>
          </div>

          {/* Services & Payment */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Services & Payment</h2>
            <RadioGroup
              value={selectedPlan}
              onValueChange={setSelectedPlan}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {plans.map((plan) => (
                <div key={plan.id}>
                  <RadioGroupItem value={plan.id} id={plan.id} className="peer sr-only" />
                  <Label
                    htmlFor={plan.id}
                    className={cn(
                      "flex flex-col p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all",
                      "peer-data-[state=checked]:border-purple-600 peer-data-[state=checked]:bg-purple-50",
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 p-2 rounded-full">{plan.icon}</div>
                        <span className="font-semibold">{plan.name}</span>
                      </div>
                      {selectedPlan === plan.id && <CheckCircle2 className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500"> per month</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-grow">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input id="paymentMethod" defaultValue={memberData.paymentMethod} className="pl-10" />
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <Scan className="mr-2 h-4 w-4" />
                      Update Card
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="expDate">Expiration Date</Label>
                  <Input id="expDate" defaultValue={memberData.expDate} />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC</Label>
                  <div className="flex items-center gap-2">
                    <Input id="cvc" defaultValue={memberData.cvc} />
                    <HelpCircle className="h-5 w-5 text-gray-400" />
                  </div>
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
              Update
            </Button>
          </div>
        </form>
      </div>
      <div className="flex-grow bg-gradient-to-b from-lime-200 via-cyan-200 to-white rounded-2xl mt-8"></div>
    </div>
  )
}
