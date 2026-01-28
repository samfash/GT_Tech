import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

const ErrorPage = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-lg">
        {/* Error icon */}
        <div className="mb-8 flex justify-center animate-fade-up">
          <div className="w-24 h-24 rounded-full bg-destructive/10 border border-destructive/20 flex items-center justify-center backdrop-blur-sm">
            <AlertTriangle className="w-12 h-12 text-destructive" />
          </div>
        </div>

        {/* Error text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text">Oops!</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Something Went Wrong
        </h2>
        
        <p className="text-muted-foreground text-lg mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          We encountered an unexpected error. Please try refreshing the page or return to the homepage.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={handleRefresh}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover-lift"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-foreground rounded-lg font-medium hover:bg-card/80 transition-all hover-lift"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>

        {/* Error code hint */}
        <p className="mt-12 text-sm text-muted-foreground/60 animate-fade-up" style={{ animationDelay: "0.5s" }}>
          If the problem persists, please contact our support team.
        </p>
      </div>
    </div>
    </>
  );
};

export default ErrorPage;