import { Link } from "wouter";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/images/logo.jfif";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-4">
              <img src={logo} alt="TCE & Associates Logo" className="h-14 w-auto object-contain" />
              <div className="hidden sm:flex flex-col border-l border-gray-200 pl-4">
                <span className="font-display text-lg font-bold text-primary tracking-tight leading-none mb-1">TCE & ASSOCIATES</span>
                <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">Certified Translation Services</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-[13px] font-bold uppercase tracking-widest text-primary/70 hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2 font-bold text-primary text-[13px] tracking-widest">
              <Phone className="h-4 w-4 text-secondary" />
              <span>+447949222201</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 p-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-bold uppercase tracking-widest text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
