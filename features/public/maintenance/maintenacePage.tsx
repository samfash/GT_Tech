import { Settings, Clock, Mail } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Animated gear icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-blue-800/50 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
              <Settings className="w-12 h-12 text-blue-300 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600/50 border border-blue-400/30 flex items-center justify-center">
              <Settings className="w-4 h-4 text-blue-200 animate-spin" style={{ animationDuration: '4s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up">
          Under Maintenance
        </h1>
        
        <p className="text-xl text-blue-200 mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          We&quot;re making things better for you. Our site is currently undergoing scheduled maintenance.
        </p>

        {/* Status card */}
        <div className="glass-card p-6 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-blue-300" />
            <span className="text-blue-100 font-medium">Estimated Downtime</span>
          </div>
          <div className="text-3xl font-bold text-white mb-2">2-4 Hours</div>
          <p className="text-blue-300 text-sm">
            We apologize for any inconvenience. We&quot;ll be back shortly!
          </p>
        </div>

        {/* Contact info */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-blue-200 mb-4">Need urgent assistance?</p>
          <a 
            href="mailto:support@financeflow.com" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 rounded-full text-white transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-4 h-4" />
            support@financeflow.com
          </a>
        </div>

        {/* Progress indicator */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
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

export default MaintenancePage;
