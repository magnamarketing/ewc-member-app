import { Shield } from "lucide-react"

export default function TermsAndConditionsPage() {
  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-2xl shadow-sm flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
          <p className="text-gray-500 mt-1">Last updated: July 28, 2025</p>
        </div>
        <div className="bg-purple-100 p-3 rounded-full">
          <Shield className="w-6 h-6 text-purple-600" />
        </div>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-sm prose max-w-none">
        <h2>1. Introduction</h2>
        <p>
          Welcome to the EWC Member Selling App ("Application", "Service"). These Terms and Conditions ("Terms", "Terms
          and Conditions") govern your use of our application operated by Express Wash Concepts ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
          These Terms apply to all employees, users and others who access or use the Service.
        </p>

        <h2>2. Use of the Application</h2>
        <p>
          This application is for internal use by authorized employees of Express Wash Concepts only. You are granted a
          non-exclusive, non-transferable, revocable license to access and use the Application strictly in accordance
          with these terms.
        </p>
        <p>
          As a condition of your use of the Application, you warrant that you will not use the Application for any
          purpose that is unlawful or prohibited by these Terms.
        </p>

        <h2>3. Accounts</h2>
        <p>
          When you create an account with us, you must provide us information that is accurate, complete, and current at
          all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of
          your account on our Service.
        </p>
        <p>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or
          actions under your password.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          The Service and its original content, features and functionality are and will remain the exclusive property of
          Express Wash Concepts and its licensors.
        </p>

        <h2>5. Termination</h2>
        <p>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason
          whatsoever, including without limitation if you breach the Terms.
        </p>

        <h2>6. Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to
          provide at least 30 days' notice prior to any new terms taking effect.
        </p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us through the support page.</p>
      </div>
    </div>
  )
}
