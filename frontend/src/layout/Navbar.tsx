import { useState } from 'react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-couple-name text-[#d2b092] text-2xl transition-colors duration-300 hover:text-[#9b9e8e]">
            Glieselle & Kyle
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Our Story
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden transition-transform duration-200 hover:scale-110"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`h-6 w-6 absolute transition-all duration-300 ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                }`} 
              />
            </div>
          </Button>
        </div>

        {/* Mobile Navigation - Smooth slide down/up animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="px-4 py-3 text-lg hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-2"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={closeMenu}
                className="px-4 py-3 text-lg hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-2"
              >
                Our Story
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="px-4 py-3 text-lg hover:bg-gray-100 rounded-md transition-all duration-200 hover:translate-x-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}