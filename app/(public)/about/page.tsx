// // app/(public)/about/page.tsx
import AboutPage from "@/features/public/about/AboutPage";


export const metadata = {
  title: "About Us – Global takers Finance",
  description: "Learn how GT Finance helps organizations in Nigeria, manage accounting records, tax obligations, and audit compliance securely .",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Finance Team" }],
  openGraph: {
    title: "About Us – Global takers Finance",
    description: "Learn how GT Finance helps organizations in Nigeria, manage accounting records, tax obligations, and audit compliance securely.",
    url: "https://gtfinance.com/about",
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

export default function About() {
  return (
    <AboutPage />
  );
}

