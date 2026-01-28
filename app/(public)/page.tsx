import HomePage from "@/features/public/home/HomePage";


export const metadata = {
  title: "Home - – Global takers Finance",
  description:     "GT Finance provides financial statements, ledgers, tax compliance, audit monitoring, and real-time financial insights for organizations in Nigeria.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Technology Team" }],
  openGraph: {
    title: "Home - Global takers Finance",
    description:   "GT Finance provides financial statements, ledgers, tax compliance, audit monitoring, and real-time financial insights for organizations in Nigeria.",
    url: "https://gtfinance.com",
    siteName: "Global takers Finance",
    images: [
      {
        url: "https://gtfinance.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "My App Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  // throw new Error("Test error page");
  
  return <HomePage />;
}
