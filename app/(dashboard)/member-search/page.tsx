import { Search, Calendar, ListFilter, Star, MoreHorizontal, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const members = [
  {
    id: "1",
    name: "Jordan Mercer",
    email: "jordan.mercer@samplemail.com",
    initials: "DM",
    plate: "JKL-8923",
    package: "Premium Wash",
    payment: { method: "BitPay", details: "Card ending in 1234" },
  },
  {
    id: "2",
    name: "Avery Chen",
    email: "a.chen@fictionalnet.io",
    initials: "AC",
    plate: "ABC-1234",
    package: "Premium Wash",
    payment: { method: "BitPay", details: "Card ending in 1234" },
  },
  {
    id: "3",
    name: "Riley Thompson",
    email: "r.thompson@mockservice.com",
    initials: "RT",
    plate: "ABC-1234",
    package: "Premium Wash",
    payment: { method: "BitPay", details: "Card ending in 1234" },
  },
  {
    id: "4",
    name: "Casey Novak",
    email: "casey.novak@inventmail.org",
    initials: "CN",
    plate: "ABC-1234",
    package: "Basic",
    payment: { method: "BitPay", details: "Card ending in 9837" },
  },
  {
    id: "5",
    name: "Morgan Diaz",
    email: "morgan.diaz@emailtest.net",
    initials: "MD",
    plate: "ABC-1234",
    package: "Basic",
    payment: { method: "BitPay", details: "Card ending in 9837" },
  },
  {
    id: "6",
    name: "Dakota James",
    email: "d.james@nomailbox.com",
    initials: "DJ",
    plate: "ABC-1234",
    package: "Basic",
    payment: { method: "BitPay", details: "Card ending in 9837" },
  },
  {
    id: "7",
    name: "Lennox Ford",
    email: "lennox.ford@protonbox.org",
    initials: "LF",
    plate: "XYZ-9876",
    package: "Basic",
    payment: { method: "Visa", details: "Card ending in 3313" },
  },
  {
    id: "8",
    name: "Finley Brooks",
    email: "finley.b@webmock.co",
    initials: "FB",
    plate: "XYZ-9876",
    package: "Basic",
    payment: { method: "Visa", details: "Card ending in 3313" },
  },
  {
    id: "9",
    name: "Skyler Grant",
    email: "s.grant@digitalmail.me",
    initials: "SG",
    plate: "XYZ-9876",
    package: "Basic",
    payment: { method: "Visa", details: "Card ending in 3313" },
  },
  {
    id: "10",
    name: "Tatum Riley",
    email: "tatum.riley@trialmail.com",
    initials: "TR",
    plate: "XYZ-9876",
    package: "Premium Wash",
    payment: { method: "ApplePay", details: "Card ending in 9204" },
  },
]

const PaymentIcon = ({ method }: { method: string }) => {
  if (method === "Visa") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
        <path
          d="M35.16 2.92H2.84A2.84 2.84 0 0 0 0 5.76v12.48A2.84 2.84 0 0 0 2.84 21.08h32.32A2.84 2.84 0 0 0 38 18.24V5.76A2.84 2.84 0 0 0 35.16 2.92z"
          fill="#fff"
        />
        <path
          d="M35.16 2.92H2.84A2.84 2.84 0 0 0 0 5.76v12.48A2.84 2.84 0 0 0 2.84 21.08h32.32A2.84 2.84 0 0 0 38 18.24V5.76A2.84 2.84 0 0 0 35.16 2.92z"
          fill="#1A1A1A"
          fillOpacity=".07"
        />
        <path
          d="M13.65 16.24h-2.59L8.4 7.6h2.73l1.4 5.9a2.37 2.37 0 0 1 .26 1.42h.03c.08-.5.16-.96.26-1.42l1.4-5.9h2.73l-2.66 8.64zM23.1 7.6l-2.1 8.64h-2.4l2.1-8.64h2.4zM24.8 16.24l1.4-8.64h2.33l-2.1 8.64h-1.63zM31.54 12.3c0-1.16-.5-1.8-1.4-1.8-.7 0-1.1.4-1.3.7l-.2-.56h-2.2l.3 8.64h2.4c0-.5.02-1 .03-1.5h.04c.3.8 1 1.2 1.9 1.2 1.4 0 2.4-.9 2.4-2.3 0-1-.5-1.6-1.3-1.9.7-.3 1.1-.9 1.1-1.8zm-3.1 1.5c-.1.5-.1.9-.1 1.2 0 .4.2.7.6.7.5 0 .8-.3.9-.8s.1-1 .1-1.5c0-.5-.2-.8-.7-.8-.4 0-.7.3-.8.7z"
          fill="#2566AF"
        />
        <path
          d="M18.3 7.8c-.5-.3-1.2-.5-2-.5-.8 0-2.7.4-2.7 2.5 0 1.1.9 1.8 1.6 2.1.7.3 1 .5 1 .7s-.3.5-.8.5c-.6 0-1-.2-1.2-.3l-.2-.9-.9-.2c-.1.5.3 1.5 1.5 1.5 1.6 0 2.7-1 2.7-2.6 0-1-.5-1.6-1.5-2.1zm-2.5 2.4c-.6-.3-1-.6-1-.9s.2-.7.7-.7c.4 0 .7.1.9.2l.1.7.4.1z"
          fill="#2566AF"
        />
      </svg>
    )
  }
  if (method === "ApplePay") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
        <path
          d="M35.16 2.92H2.84A2.84 2.84 0 0 0 0 5.76v12.48A2.84 2.84 0 0 0 2.84 21.08h32.32A2.84 2.84 0 0 0 38 18.24V5.76A2.84 2.84 0 0 0 35.16 2.92z"
          fill="#fff"
        />
        <path
          d="M18.2 11.6c.3-1.7 1.7-2.8 3.2-2.8.1 0 .2 0 .3 0-1.4-.9-2.8-1.1-4-1.1-2.2 0-4.1 1.3-5.1 3.2-.9 1.7-.3 4.3 1.1 5.9.8 1.1 1.7 1.9 2.9 1.9 1.1 0 1.5-.7 2.8-.7s1.6.7 2.8.7c1.2 0 2.1-.8 2.8-1.8.2-.3.3-.6.4-.8-.1 0-.2 0-.3 0-1.8 0-3.4-1.2-3.9-2.9zM17.6 6.8c.8-.9 1.4-2.1 1.2-3.3-1 .1-2.2.7-3 1.6-.8.8-1.5 2.1-1.2 3.3 1.1-.1 2.2-.7 3-1.6z"
          fill="#000"
        />
      </svg>
    )
  }
  if (method === "BitPay") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="38" height="24" viewBox="0 0 38 24" fill="none">
        <path
          d="M35.16 2.92H2.84A2.84 2.84 0 0 0 0 5.76v12.48A2.84 2.84 0 0 0 2.84 21.08h32.32A2.84 2.84 0 0 0 38 18.24V5.76A2.84 2.84 0 0 0 35.16 2.92z"
          fill="#fff"
        />
        <path d="M19.4 12.5c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3 1.3.6 1.3 1.3 1.3z" fill="#0078D4" />
        <path
          d="M19.4 6.8c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7-2.6-5.7-5.7-5.7zm0 8.6c-1.6 0-2.9-1.3-2.9-2.9s1.3-2.9 2.9-2.9 2.9 1.3 2.9 2.9-1.3 2.9-2.9 2.9z"
          fill="#0078D4"
        />
      </svg>
    )
  }
  return null
}

export default function CustomerSearchPage() {
  return (
    <>
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back!</h1>
          <p className="text-gray-500 mt-1">Update your card details.</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <Star className="w-6 h-6 text-purple-600" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm flex-grow">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input placeholder="Search by Phone, Email, Card, RFID, or Plate..." className="w-full max-w-xs pl-10" />
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Calendar className="w-4 h-4" />
              <span>Jan 6, 2025 - Jan 13, 2025</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <ListFilter className="w-4 h-4" />
              <span>Filters</span>
            </Button>
          </div>
          <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2">
            <Link href="/register-member">
              <Plus className="w-4 h-4" />
              <span>Register Member</span>
            </Link>
          </Button>
        </div>

        <h2 className="text-xl font-semibold mb-4">All Members</h2>

        <div className="border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Executed by</TableHead>
                <TableHead>Plate</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Link href={`/member/${member.id}`} className="flex items-center gap-3 group">
                      <Avatar>
                        <AvatarImage src={`/placeholder.svg?height=40&width=40&text=${member.initials}`} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium group-hover:text-purple-600">{member.name}</p>
                        <p className="text-sm text-gray-500">{member.email}</p>
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>{member.plate}</TableCell>
                  <TableCell>
                    {member.package === "Premium Wash" ? (
                      <Badge variant="default" className="bg-blue-100 text-blue-700 hover:bg-blue-100">
                        <Star className="w-3 h-3 mr-1" />
                        {member.package}
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                        {member.package}
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <PaymentIcon method={member.payment.method} />
                      <span>{member.payment.details}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
