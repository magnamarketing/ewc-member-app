import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Smile, Gem, Car, Star, Crown, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const washPackages = [
  {
    id: "basic",
    icon: <BookOpen className="w-8 h-8 text-blue-600" />,
    title: "Basic Wash",
    brand: "Moo Moo Express",
    description: "Standard car wash with basic cleaning products and exterior cleaning",
    whoItsRightFor: "Perfect for customers who want a quick, affordable wash",
    monthlyAmount: "$9.99",
    features: ["Exterior wash", "Basic cleaning products", "Quick service"],
    popular: false,
  },
  {
    id: "premium",
    icon: <Smile className="w-8 h-8 text-purple-600" />,
    title: "Premium Wash",
    brand: "Moo Moo Express",
    description: "Premium car wash with premium products and extra services including interior cleaning",
    whoItsRightFor: "Ideal for customers who want a thorough clean with premium products",
    monthlyAmount: "$29.99",
    features: ["Exterior wash", "Interior cleaning", "Premium products", "Tire shine"],
    popular: true,
  },
  {
    id: "unlimited",
    icon: <Gem className="w-8 h-8 text-gold-600" />,
    title: "Unlimited Premium",
    brand: "Moo Moo Express",
    description: "Unlimited premium car washes with all premium products and services",
    whoItsRightFor: "Perfect for frequent drivers who want unlimited premium washes",
    monthlyAmount: "$79.99",
    features: ["Unlimited washes", "Premium products", "Interior cleaning", "Priority service"],
    popular: false,
  },
  {
    id: "express",
    icon: <Zap className="w-8 h-8 text-yellow-600" />,
    title: "Express Wash",
    brand: "Moo Moo Express",
    description: "Quick 10-minute express car wash service for busy customers",
    whoItsRightFor: "Great for busy professionals who need a fast, efficient wash",
    monthlyAmount: "$4.99",
    features: ["10-minute service", "Exterior wash", "Quick dry", "Convenient"],
    popular: false,
  },
  {
    id: "deluxe",
    icon: <Crown className="w-8 h-8 text-purple-600" />,
    title: "Deluxe Wash",
    brand: "Moo Moo Express",
    description: "Deluxe wash with interior cleaning, waxing, and premium detailing",
    whoItsRightFor: "For customers who want the ultimate car care experience",
    monthlyAmount: "$39.99",
    features: ["Interior cleaning", "Waxing", "Premium detailing", "Tire shine"],
    popular: false,
  },
  {
    id: "ultimate",
    icon: <Star className="w-8 h-8 text-gold-600" />,
    title: "Ultimate Package",
    brand: "Moo Moo Express",
    description: "Complete detailing with premium products and protection services",
    whoItsRightFor: "Perfect for car enthusiasts who want maximum protection and shine",
    monthlyAmount: "$99.99",
    features: ["Complete detailing", "Paint protection", "Ceramic coating", "Premium products"],
    popular: false,
  },
  {
    id: "monthly",
    icon: <Car className="w-8 h-8 text-green-600" />,
    title: "Monthly Unlimited",
    brand: "Moo Moo Express",
    description: "Unlimited washes for 30 days with standard wash services",
    whoItsRightFor: "Great for daily drivers who wash their car frequently",
    monthlyAmount: "$49.99",
    features: ["Unlimited washes", "30-day validity", "Standard services", "Flexible scheduling"],
    popular: false,
  },
  {
    id: "annual",
    icon: <Shield className="w-8 h-8 text-blue-600" />,
    title: "Annual Membership",
    brand: "Moo Moo Express",
    description: "Full year of unlimited premium washes with member benefits",
    whoItsRightFor: "Best value for long-term customers who want premium service",
    monthlyAmount: "$399.99",
    features: ["12 months unlimited", "Premium services", "Member benefits", "Priority booking"],
    popular: false,
  },
]

export default function WashPackagesPage() {

  return (
    <div className="w-full">
      {/* Brand Header */}
      <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
        <div className="flex flex-col items-center text-center">
          <Image 
            src="/moo-moo-logo.png" 
            alt="Moo Moo Express Car Wash Logo" 
            width={300} 
            height={150} 
            className="mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Moo Moo Express Car Wash</h1>
          <p className="text-xl text-gray-600 mb-6">Premium Car Wash Services</p>
          <div className="w-24 h-1 bg-purple-600 rounded-full"></div>
        </div>
      </div>



             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
         {washPackages.map((pkg) => (
                       <Card 
              key={pkg.id} 
              className={cn(
                "relative transition-all duration-200 hover:shadow-lg flex flex-col h-full",
                pkg.popular && "border-purple-200 bg-gradient-to-br from-purple-50 to-white"
              )}
            >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-purple-600 text-white px-3 py-1">
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="bg-gray-100 p-3 rounded-full">
                  {pkg.icon}
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">{pkg.monthlyAmount}</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              </div>
              <CardTitle className="text-xl mt-4">{pkg.title}</CardTitle>
              <CardDescription className="text-sm text-gray-600">
                {pkg.brand}
              </CardDescription>
            </CardHeader>
            
                         <CardContent className="space-y-4 flex-grow">
               <div>
                 <p className="text-gray-700 mb-3">{pkg.description}</p>
                 <div className="bg-blue-50 p-3 rounded-lg">
                   <p className="text-sm font-medium text-blue-800 mb-1">Who it's right for:</p>
                   <p className="text-sm text-blue-700">{pkg.whoItsRightFor}</p>
                 </div>
               </div>
               
               <div>
                 <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                 <ul className="space-y-1">
                   {pkg.features.map((feature, index) => (
                     <li key={index} className="text-sm text-gray-600 flex items-center">
                       <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                       {feature}
                     </li>
                   ))}
                 </ul>
               </div>
               
               
             </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 
