import { Linkedin, Twitter, Mail } from 'lucide-react';
import gtLogo from '@/public/brand/logo-full.png';
import Image from 'next/image';

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ['Features', 'Solutions', 'Pricing', 'Security', 'Integrations'],
    Company: ['About Us', 'Careers', 'Blog', 'Press', 'Partners'],
    Resources: ['Documentation', 'Help Center', 'API Reference', 'Status', 'Changelog'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'],
  };

  return (
<footer className="bg-linear-to-b from-background to-gt-navy pt-20 pb-8">      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center ">
              <Image
                src={gtLogo}
                width={280}
                height={80} 
                alt="GT Finance Logo" 
                className="hidden md:block"
              />
            </a>
            <p className="text-white/80 mb-6 max-w-sm">
              Powerful financial reporting and tax management software for growing organizations. 
              Trusted by finance leaders worldwide.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gt-cyan/20 flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-gt-cyan" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gt-cyan/20 flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-white/70 group-hover:text-gt-cyan" />
              </a>
              <a
                href="mailto:contact@gtfinance.com"
                className="w-10 h-10 rounded-lg bg-white/10 hover:bg-gt-cyan/20 flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-white/70 group-hover:text-gt-cyan" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-gt-cyan transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} GT Finance. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gt-success" />
                <span>All systems operational</span>
              </div>
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;