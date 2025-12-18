"use client";

import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number with glow effect */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none text-transparent bg-clip-text bg-linear-to-b from-blue-200 to-blue-500/50 drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]">
            404
          </h1>
        </div>

        {/* Search icon in glass circle */}
        <div className="mb-8 flex justify-center animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-20 h-20 rounded-full bg-blue-800/50 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
            <Search className="w-10 h-10 text-blue-300" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Page Not Found
        </h2>
        
        <p className="text-xl text-blue-200 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Oops! The page you&quot;re looking for seems to have wandered off into the digital void.
        </p>

        {/* Suggestion card */}
        <div className="glass-card p-6 mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-blue-100 mb-4">Here are some helpful links:</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>
            <Button 
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-800/50 hover:bg-blue-700/50 border border-blue-500/30 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;