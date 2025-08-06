"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Pencil, Mail, Car, CreditCard, Scan, CheckCircle2, BookOpen, Smile, Gem } from "lucide-react"
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
]

const memberData = {
  // Customer Information
  customerGuid: "550e8400-e29b-41d4-a716-446655440001",
  firstName: "Jordan",
  lastName: "Mercer",
  email: "jordan.mercer@sampledomain.com",
  phone: "(416) 555-2910",
  barcode: "123456789012",
  
  // Vehicle Information (optional)
  vehicleMake: "Toyota",
  vehicleModel: "2024 Corolla",
  vehiclePlate: "ZXQ-8493",
  
  // Membership Information
  membershipName: "Premium Wash",
  membershipBrand: "Moo Moo Express",
  membershipDescription: "Unlimited premium car washes with premium products",
  membershipPrice: "$29.99",
  
  // Payment Information
  cardHolderName: "Jordan Mercer",
  cardNumber: "**** **** **** 1234",
  expiryDate: "12/25",
  cvv: "***",
  zipCode: "12345",
}

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const [selectedMembership, setSelectedMembership] = useState("premium")

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{`${memberData.firstName} ${memberData.lastName}`}</h1>
          <p className="text-gray-500 mt-1 font-mono text-sm">
            {memberData.customerGuid} | {memberData.barcode}
          </p>
        </div>
        <Button variant="ghost" size="icon" className="bg-purple-100 hover:bg-purple-200 rounded-full">
          <Pencil className="w-6 h-6 text-purple-600" />
        </Button>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <form className="space-y-8">
          {/* Customer Information */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                <Input id="firstName" defaultValue={memberData.firstName} required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input id="lastName" defaultValue={memberData.lastName} required />
              </div>
              <div className="relative">
                <Label htmlFor="email">Email Address</Label>
                <Mail className="absolute left-3 top-10 h-5 w-5 text-gray-400" />
                <Input id="email" type="email" defaultValue={memberData.email} className="pl-10" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
                <Input id="phone" type="tel" defaultValue={memberData.phone} required />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="barcode">Barcode <span className="text-red-500">*</span></Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-grow">
                    <Scan className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input id="barcode" defaultValue={memberData.barcode} className="pl-10 font-mono" required />
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
                <Select defaultValue={memberData.vehicleMake}>
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
                <Input id="vehicleModel" defaultValue={memberData.vehicleModel} />
              </div>
              <div>
                <Label htmlFor="vehiclePlate">Vehicle Plate <span className="text-red-500">*</span></Label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input id="vehiclePlate" defaultValue={memberData.vehiclePlate} className="pl-10" required />
                </div>
              </div>
            </div>
          </div>

          {/* Membership Information */}
          <div className="space-y-6">
            <h2 className="text-lg font-semibold">Membership Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {membershipPlans.map((plan) => (
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
                    <Input id="cardNumber" defaultValue={memberData.cardNumber} className="pl-10" required />
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
                  <Input id="expiryDate" defaultValue={memberData.expiryDate} required />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV <span className="text-red-500">*</span></Label>
                  <Input id="cvv" defaultValue={memberData.cvv} required />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZipCode <span className="text-red-500">*</span></Label>
                  <Input id="zipCode" defaultValue={memberData.zipCode} required />
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






