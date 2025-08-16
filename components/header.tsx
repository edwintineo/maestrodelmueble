import { Mail, Facebook } from 'lucide-react'
import Link from "next/link"

export default function Header() {
return (
<header className="bg-slate-800 text-white py-2 px-4">
<div className="container mx-auto flex justify-between items-center text-sm">
  <div className="flex items-center space-x-4">
    {/* Logo removed */}
  </div>
  <div className="flex items-center space-x-4">
    <div className="flex items-center space-x-2">
      <Mail className="w-4 h-4" />
      <span>Email: victor@maestrodelmueble.cl</span>
    </div>
    <div className="flex items-center space-x-2">
      <Link href="#" className="hover:text-orange-400 transition-colors">
        <Facebook className="w-4 h-4" />
      </Link>
    </div>
  </div>
</div>
</header>
)
}
