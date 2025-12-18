import { Shield, Lock, Eye, Database, UserCheck, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, make a transaction, or contact us for support. This may include your name, email address, phone number, and financial information necessary to provide our services."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions."
    },
    {
      icon: Lock,
      title: "Information Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is encrypted in transit and at rest using industry-standard protocols."
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below."
    },
    {
      icon: Shield,
      title: "Data Retention",
      content: "We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements."
    },
    {
      icon: Mail,
      title: "Contact Us",
      content: "If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@finflow.com or through our contact page."
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-950 via-blue-900 to-blue-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <header className="relative z-10 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center animate-fade-up">
            <div className="w-20 h-20 rounded-full bg-blue-800/50 border border-blue-500/30 flex items-center justify-center backdrop-blur-sm">
              <Shield className="w-10 h-10 text-blue-300" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-200 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-blue-300 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Last updated: December 2025
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className="glass-card p-8 animate-fade-up"
              style={{ animationDelay: `${0.1 * (index + 4)}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <section.icon className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-blue-200 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Additional Legal Text */}
          <div 
            className="glass-card p-8 animate-fade-up"
            style={{ animationDelay: '1s' }}
          >
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-blue-200 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy.
            </p>
            <p className="text-blue-200 leading-relaxed">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PrivacyPolicyPage;