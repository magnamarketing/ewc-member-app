import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, MapPin, Users, Phone, Clock } from "lucide-react"
import Image from "next/image"

const locationData = {
  name: "Moo Moo Express - Main St",
  address: "6071 E Main St, Columbus, OH 43213",
  phone: "(614) 762-9904",
  imageUrl: "/location-photo-cropped.jpeg",
  hours: [
    { day: "Monday", time: "7 AM – 8 PM" },
    { day: "Tuesday", time: "7 AM – 8 PM" },
    { day: "Wednesday", time: "7 AM – 8 PM" },
    { day: "Thursday", time: "7 AM – 8 PM" },
    { day: "Friday", time: "7 AM – 8 PM" },
    { day: "Saturday", time: "7 AM – 8 PM" },
    { day: "Sunday", time: "8 AM – 8 PM" },
  ],
  employees: [
    {
      id: "1",
      name: "Jordan Rhye",
      email: "lennox.ford@protonbox.org",
      role: "Location Manager",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Alex Johnson",
      email: "alex.j@moomoo.com",
      role: "Shift Lead",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Maria Garcia",
      email: "maria.g@moomoo.com",
      role: "Wash Attendant",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Chris Lee",
      email: "chris.l@moomoo.com",
      role: "Wash Attendant",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "Samantha Green",
      email: "samantha.g@moomoo.com",
      role: "Wash Attendant",
      avatarUrl: "/placeholder.svg?height=40&width=40",
    },
  ],
}

export default function ProfilePage() {
  return (
    <div className="w-full space-y-8">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Location Profile</h1>
          <p className="text-gray-500 mt-1">Details for the {locationData.name} location.</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <User className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Location Details Card */}
        <div className="lg:col-span-1">
          <Card className="flex flex-col h-full">
            <Image
              src={locationData.imageUrl || "/placeholder.svg"}
              alt={locationData.name}
              width={1360}
              height={1020}
              className="w-full h-auto rounded-t-lg"
            />
            <CardHeader>
              <CardTitle>{locationData.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 flex-grow">
              <div className="flex items-start gap-3 text-gray-600">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>{locationData.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href={`tel:${locationData.phone}`} className="hover:underline">
                  {locationData.phone}
                </a>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold text-md mb-2 flex items-center gap-2 text-gray-800">
                  <Clock className="w-5 h-5" />
                  Operating Hours
                </h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {locationData.hours.map((hour) => (
                    <li key={hour.day} className="flex justify-between">
                      <span>{hour.day}</span>
                      <span className="font-medium">{hour.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Employees Card */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span>Team Members at this Location</span>
              </CardTitle>
              <CardDescription>A list of all employees registered at {locationData.name}.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Role</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {locationData.employees.map((employee) => (
                      <TableRow key={employee.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={employee.avatarUrl || "/placeholder.svg"} alt={employee.name} />
                              <AvatarFallback>
                                {employee.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{employee.name}</p>
                              <p className="text-sm text-gray-500">{employee.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{employee.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
