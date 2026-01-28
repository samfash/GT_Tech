import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals_v2.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "GT Finance",
    template: "%s| VAT Management Software in Nigeria | GT Finance",
  },
  description:
    "GT Finance is a financial management platform for reports, ledgers, tax compliance, and audit monitoring in Nigeria.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    "financial reporting software",
    "accounting system",
    "income statement",
    "cash flow statement",
    "financial position",
    "VAT management",
    "CIT tax",
    "audit compliance",
    "GT Finance",
  ],

  authors: [{ name: "GT Technology" }],

  metadataBase: new URL("https://gtfinance.com"), // change later

  openGraph: {
    title: "VAT Management Software in Nigeria | GT Finance",
    description:
      "A complete financial management platform for reports, ledgers, taxes, and audit compliance.",
    url: "https://gtfinance.com",
    siteName: "GT Finance",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "GT Finance",
    description:
      "Financial reporting, tax management, and audit compliance made simple.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GT Finance",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "GT Finance helps organizations manage financial reports including income statements, cash flow statements, statements of financial position, ledgers, tax compliance (VAT and CIT), and audit monitoring.",

  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "NGN",
    availability: "https://schema.org/InStock",
  },

  publisher: {
    "@type": "Organization",
    name: "GT Technology",
    url: "https://gtfinance.com",
  },

  featureList: [
    "Income statement generation",
    "Cash flow reporting",
    "Statement of financial position",
    "Cash book management",
    "Sales and purchase ledgers",
    "Receipts and payments ledger",
    "VAT and CIT tax management",
    "Audit and compliance monitoring",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
