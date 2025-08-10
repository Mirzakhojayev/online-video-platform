import { SidebarTrigger } from "@/components/ui/sidebar"
import Link from "next/link"
import AuthButton from "@/components/auth-button"
import { SearchIcon } from "lucide-react"

export const HomeNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-[#0f0f0f] text-gray-100 flex items-center px-2 pr-5 z-50">
      <div className="flex items-center gap-4 w-full">
        {/* Menu and Logo */}
        <div className="flex items-center flex-shrink-0">
          <SidebarTrigger/>
          <Link href="/">
          <h1 className="text-2xl font-semibold tracking-tight p-4">Salvage</h1>
          </Link>
        </div>

        {/* Search bar */}
        <div className="flex-1 flex justify-center max-w-[720px] mx-auto">
          <form className='flex w-full w-max-[500px]'>
      <div className='relative w-full'>
        <input
          type='text'
          placeholder='Search'
          className="w-full pl-4 py-2 pr-12 rounded-l-full border bg-[#121212] border-[#1D1D1D] transition-colors focus:outline-none focus:border-gray-500"
        />
      </div>
      <button type="submit" className="px-5 py-1 border border-l-0 bg-[#1D1D1D] border-[#1D1D1D] rounded-r-full hover:opacity-80 cursor-pointer focus:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon size={24}/>
      </button>
    </form>
        </div>

        <div className="flex-shrink-0 items-center flex gap-4">
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}