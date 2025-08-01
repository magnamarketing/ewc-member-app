import { Search, ListFilter, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"

const members = [
  {
    id: "1",
    customerGuid: "550e8400-e29b-41d4-a716-446655440001",
    firstName: "Jordan",
    lastName: "Mercer",
    email: "jordan.mercer@samplemail.com",
    phone: "+1 (555) 123-4567",
    barcode: "123456789012",
    created: "2024-01-15",
    lastUpdated: "2024-01-20",
    initials: "JM",
  },
  {
    id: "2",
    customerGuid: "550e8400-e29b-41d4-a716-446655440002",
    firstName: "Avery",
    lastName: "Chen",
    email: "a.chen@fictionalnet.io",
    phone: "+1 (555) 234-5678",
    barcode: "123456789013",
    created: "2024-01-16",
    lastUpdated: "2024-01-21",
    initials: "AC",
  },
  {
    id: "3",
    customerGuid: "550e8400-e29b-41d4-a716-446655440003",
    firstName: "Riley",
    lastName: "Thompson",
    email: "r.thompson@mockservice.com",
    phone: "+1 (555) 345-6789",
    barcode: "123456789014",
    created: "2024-01-17",
    lastUpdated: "2024-01-22",
    initials: "RT",
  },
  {
    id: "4",
    customerGuid: "550e8400-e29b-41d4-a716-446655440004",
    firstName: "Casey",
    lastName: "Novak",
    email: "casey.novak@inventmail.org",
    phone: "+1 (555) 456-7890",
    barcode: "123456789015",
    created: "2024-01-18",
    lastUpdated: "2024-01-23",
    initials: "CN",
  },
  {
    id: "5",
    customerGuid: "550e8400-e29b-41d4-a716-446655440005",
    firstName: "Morgan",
    lastName: "Diaz",
    email: "morgan.diaz@emailtest.net",
    phone: "+1 (555) 567-8901",
    barcode: "123456789016",
    created: "2024-01-19",
    lastUpdated: "2024-01-24",
    initials: "MD",
  },
  {
    id: "6",
    customerGuid: "550e8400-e29b-41d4-a716-446655440006",
    firstName: "Dakota",
    lastName: "James",
    email: "d.james@nomailbox.com",
    phone: "+1 (555) 678-9012",
    barcode: "123456789017",
    created: "2024-01-20",
    lastUpdated: "2024-01-25",
    initials: "DJ",
  },
  {
    id: "7",
    customerGuid: "550e8400-e29b-41d4-a716-446655440007",
    firstName: "Lennox",
    lastName: "Ford",
    email: "lennox.ford@protonbox.org",
    phone: "+1 (555) 789-0123",
    barcode: "123456789018",
    created: "2024-01-21",
    lastUpdated: "2024-01-26",
    initials: "LF",
  },
  {
    id: "8",
    customerGuid: "550e8400-e29b-41d4-a716-446655440008",
    firstName: "Finley",
    lastName: "Brooks",
    email: "finley.b@webmock.co",
    phone: "+1 (555) 890-1234",
    barcode: "123456789019",
    created: "2024-01-22",
    lastUpdated: "2024-01-27",
    initials: "FB",
  },
  {
    id: "9",
    customerGuid: "550e8400-e29b-41d4-a716-446655440009",
    firstName: "Skyler",
    lastName: "Grant",
    email: "s.grant@digitalmail.me",
    phone: "+1 (555) 901-2345",
    barcode: "123456789020",
    created: "2024-01-23",
    lastUpdated: "2024-01-28",
    initials: "SG",
  },
  {
    id: "10",
    customerGuid: "550e8400-e29b-41d4-a716-446655440010",
    firstName: "Tatum",
    lastName: "Riley",
    email: "tatum.riley@trialmail.com",
    phone: "+1 (555) 012-3456",
    barcode: "123456789021",
    created: "2024-01-24",
    lastUpdated: "2024-01-29",
    initials: "TR",
  },
]



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
        <h2 className="text-xl font-semibold mb-4">All Members</h2>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Search by</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search Full Name..." className="pl-10" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search Phone..." className="pl-10" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search Email..." className="pl-10" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search Barcode..." className="pl-10" />
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search Vehicle Plate..." className="pl-10" />
            </div>
          </div>
        </div>

        <div className="border rounded-lg overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>Email Address</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Barcode</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <Link href={`/member/${member.id}`} className="hover:text-purple-600 font-medium">
                      {`${member.firstName} ${member.lastName}`}
                    </Link>
                  </TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>{member.phone}</TableCell>
                  <TableCell className="font-mono text-sm">{member.barcode}</TableCell>
                  <TableCell>{member.created}</TableCell>
                  <TableCell>{member.lastUpdated}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
