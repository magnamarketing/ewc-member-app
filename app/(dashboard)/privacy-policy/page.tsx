import { Info } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="text-gray-500 mt-1">Last updated: July 28, 2025</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <Info className="w-6 h-6 text-purple-600" />
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm prose max-w-none">
        <h2>1. Information Collection and Use</h2>
        <p>
          We collect several different types of information for various purposes to provide and improve our Service to
          you. This includes customer personal data, vehicle information, and payment details required for member
          registration and management.
        </p>

        <h2>2. Types of Data Collected</h2>
        <h3>Personal Data</h3>
        <p>
          While using our Service, we may ask you to provide us with certain personally identifiable information that
          can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but
          is not limited to: Email address, First name and last name, Phone number, Vehicle Information.
        </p>

        <h2>3. Use of Data</h2>
        <p>Express Wash Concepts uses the collected data for various purposes:</p>
        <ul>
          <li>To provide and maintain our Service</li>
          <li>To manage customer accounts and memberships</li>
          <li>To process payments</li>
          <li>To provide customer support</li>
          <li>For internal analysis and service improvement</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          The security of your data is important to us, but remember that no method of transmission over the Internet,
          or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
          protect your Personal Data, we cannot guarantee its absolute security.
        </p>

        <h2>5. Service Providers</h2>
        <p>
          We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to
          provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our
          Service is used. These third parties have access to your Personal Data only to perform these tasks on our
          behalf and are obligated not to disclose or use it for any other purpose.
        </p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us.</p>
      </div>
    </div>
  )
}
