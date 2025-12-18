import { Sparkles, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Integrations", "API"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: ["Documentation", "Help Center", "Guides", "Webinars", "Status"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses", "Contact"],
};

const PublicFooter = () => {
  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-blue-50" />
              </div>
              <span className="text-xl font-bold text-blue-50">GT Tech</span>
            </div>
            <p className="text-blue-300 mb-6 max-w-sm">
              Empowering businesses with intelligent financial tools. Simplify payments, 
              gain insights, and grow globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-blue-800 flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-blue-50 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-300 hover:text-blue-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-blue-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-400 text-sm">
            © 2025 GT Tech. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-blue-400">
            <a href="#" className="hover:text-blue-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
