import { Button } from "@/components/ui/button"

const AzureLogo = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.038 4.5L5.53804 18.263H18.538L12.038 4.5Z" fill="#0078D4" />
    <path d="M13.238 18.263H21.538L15.038 7.5L13.238 18.263Z" fill="#0078D4" />
  </svg>
)

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 via-cyan-300 to-blue-400 p-4">
      <div className="w-full max-w-md bg-[#181d27] text-white rounded-3xl shadow-2xl p-10">
        <div className="text-center">
          <div className="mb-8">
            <p className="text-2xl font-bold tracking-widest">EXPRESS</p>
            <p className="text-sm tracking-[0.3em] text-gray-400">WASH CONCEPTS</p>
          </div>
          <h1 className="text-4xl font-bold mb-2">Log in</h1>
          <p className="text-gray-400">Welcome back! Please enter your details.</p>
        </div>
        <div className="mt-10">
          <Button className="w-full bg-white text-black hover:bg-gray-200 py-6 text-md font-semibold">
            <AzureLogo />
            <span className="ml-2">Sign in with Azure</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
