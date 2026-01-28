'use client';
import Link from "next/link";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import gtLogo from '@/public/brand/logo-full.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";



const PublicHeader = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isLoggedIn, login, logout } = useAuthStore();
  

  const [darkMode, setDarkMode] = useState(() => {
  if (typeof window === "undefined") return false; 
  return localStorage.getItem("darkMode") === "true";
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  if (typeof window !== "undefined") {
    localStorage.setItem("darkMode", newMode.toString());
  }
};

const AUTH_LOGIN_URL = process.env.NEXT_PUBLIC_Backend_login_URL as string;

  const handleLogin = () => {
  window.location.href = AUTH_LOGIN_URL;
};

  const handleLogout = () => {
    logout();
    router.push("/");
  };
  

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'gt-glass py-1' : 'py-2'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between h-full">
          <a href="#" className="flex items-center gap-3">
            <Image
              src={gtLogo} 
              width={140}
              height={48}
              alt="GT Finance Logo" 
              priority
              className="h-15 w-auto md:h-24 object-contain"

            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-gt-blue transition-colors font-medium"
              >
                {link.name}
              </Link>

            ))}
            {isLoggedIn && <Link href="/dashboard" className="text-muted-foreground hover:text-gt-blue transition-colors">Dashboard</Link>} 

          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            {!isLoggedIn ? (
           <Button variant="hero_outline" size="sm" onClick={handleLogin}>Login</Button> 
             ) : (
               <Button variant="hero_outline" size="sm" onClick={handleLogout}>Logout</Button>
             )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-border"
          >
            <div className="flex flex-col gap-4 pt-4 bg-background/95 p-4 rounded-lg ">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button onClick={toggleDarkMode}>
            {darkMode ? ( <><Sun size={18} /><span>Light</span></> ): (<><Moon size={18}/> <span>Dark</span></>)}
            </Button>
            {isLoggedIn && <Link href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link>} 
            {!isLoggedIn ? (
           <Button variant="hero" size="sm" onClick={handleLogin}>Login</Button> 
             ) : (
               <Button variant="hero" size="sm" onClick={handleLogout}>Logout</Button>
             )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default PublicHeader;