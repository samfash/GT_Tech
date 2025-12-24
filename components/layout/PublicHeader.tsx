"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sparkles, Moon, Sun, Menu, XIcon} from "lucide-react";
import logo from "@/public/gt_logo.png";
import Image from "next/image"; 


export function PublicHeader() {
  const { isLoggedIn, login, logout } = useAuthStore();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);


  const [darkMode, setDarkMode] = useState(() => {
  if (typeof window === "undefined") return false; 
  return localStorage.getItem("darkMode") === "true";
});

useEffect(() => {
  document.documentElement.classList.toggle("dark", darkMode);
}, [darkMode]);

const toggleDarkMode = () => {
  const newMode = !darkMode;
  setDarkMode(newMode);
  if (typeof window !== "undefined") {
    localStorage.setItem("darkMode", newMode.toString());
  }
};


  const AUTH_LOGIN_URL = process.env.NEXT_PUBLIC_Backend_URL as string;

  const handleLogin = () => {
  window.location.href = AUTH_LOGIN_URL;
};

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <nav className="py-6 px-6 border-foreground/10 fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="rounded flex items-center justify-center">
              <Image src={logo} alt="GT Technology Logo" width={95} height={90} className="object-contain" priority />
            </div>
            <span className="text-xl text-brand-soft -ml-5">Technology</span>
          </Link>

          <nav className="absolute left-1/2 transform -translate-x-1/2">
          <div className="hidden md:flex items-center gap-8">
            {!isLoggedIn && <Link href="/" className="font-medium underline transition-colors">Home</Link>}
            {!isLoggedIn && <Link href="/about" className="font-medium">About</Link>}
            {!isLoggedIn && <Link href="/contact" className="font-medium transition-colors">Contact</Link>}
              
            {isLoggedIn && <Link href="/dashboard" className="text-blue-200 hover:text-blue-50 transition-colors">Dashboard</Link>} 
          </div>
          </nav>


<div style={{ display: "flex", gap: "1rem", marginLeft: "auto" }}>
  <Button onClick={toggleDarkMode}>
    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
  </Button>
  {!isLoggedIn ? (
    <Button variant="hero_outline" size="sm" onClick={handleLogin}>Login</Button> 
  ) : (
    <Button variant="hero_outline" size="sm" onClick={handleLogout}>Logout</Button>
  )}
</div>


<Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="md:hidden">
  {isOpen ? <XIcon className="h-5 w-5" /> : <Menu size={20} />}
</Button>

{/* Mobile Menu */}
       <div>
         {isOpen && (
           <div
             className="absolute top-full left-0 w-full bg-background rounded-b-2xl border-t border-background dark:border-background mt-2 shadow-md md:hidden"
           >
             <div className="flex flex-col items-center py-4">
               {!isLoggedIn && <Link  onClick={() => setIsOpen(false)} href="/" className=" hover:bg-brand transition-colors">Home</Link>}
            {!isLoggedIn && <Link onClick={() => setIsOpen(false)} href="/about" className="hover:bg-brand font-medium">About</Link>}
            {!isLoggedIn && <Link onClick={() => setIsOpen(false)} href="/contact" className="hover:bg-brand transition-colors">Contact</Link>}
              
            {isLoggedIn && <Link href="/dashboard" className="text-blue-200 hover:text-blue-50 transition-colors">Dashboard</Link>} 
              </div>       
            </div>
          )}
      </div>
        </div>
      </nav>

  );
}

      