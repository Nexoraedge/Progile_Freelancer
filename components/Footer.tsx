import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t w-full border-slate-800">
      <div className="px-5 lg:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Image className="rounded-lg" src="/logo.jpg" alt="Logo" width={24} height={24} />
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
                Freelancer Profile Launcher
              </span>
            </Link>

            <p className="text-slate-400 mb-4 max-w-md">
              Create one professional profile and instantly generate platform-specific content for Fiverr, Upwork, and
              more.
            </p>

            <div className="flex gap-4 mb-6">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  FAQ
                </Link>
              </li>
             
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-400 hover:text-purple-400 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Freelancer Profile Launcher. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="text-sm text-slate-500 hover:text-purple-400">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-purple-400">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-slate-500 hover:text-purple-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
    