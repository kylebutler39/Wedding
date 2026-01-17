import { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <div className="fixed top-0 w-full z-50 bg-wedding-cream/80 backdrop-blur-md border-b border-wedding-terracotta-dark/20 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link 
                        to="/" 
                        className="font-couple-name text-wedding-terracotta text-2xl transition-colors duration-300 hover:text-wedding-terracotta-dark"
                    >
                        Glieselle & Kyle
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden md:flex">
                        <NavigationMenuList className="gap-6 font-nav">
                            <NavigationMenuItem>
                                <Link to="/">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/about">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        Our Story
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/contact">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/rsvp">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        RSVP
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/qa">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        Q&A
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link to="/info">
                                    <NavigationMenuLink className="text-wedding-charcoal hover:text-wedding-terracotta transition-colors duration-200 px-4 py-2">
                                        Info
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden transition-transform duration-200 hover:scale-110 hover:bg-transparent text-wedding-terracotta"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6 flex items-center justify-center">
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
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-4 border-t border-wedding-terracotta-dark/20 font-nav">
                        <nav className="flex flex-col gap-2">
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                Our Story
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                Contact
                            </Link>
                            <Link
                                to="/rsvp"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                RSVP
                            </Link>
                            <Link
                                to="/qa"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                Q&A
                            </Link>
                            <Link
                                to="/info"
                                onClick={closeMenu}
                                className="px-4 py-3 text-lg text-wedding-charcoal hover:text-wedding-terracotta hover:bg-white/40 rounded-md transition-all duration-200"
                            >
                                Info
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    ) 
}