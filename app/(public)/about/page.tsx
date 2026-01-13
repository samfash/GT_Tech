// // app/(public)/about/page.tsx
import AboutPage from "@/features/public/about/AboutPage";



export const metadata = {
  title: "About Us – Global takers Finance",
  description: "Learn more about Global takers Finance and what we do.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Finance Team" }],
  openGraph: {
    title: "About Us – Global takers Finance",
    description: "Learn more about Global takers Finance and what we do.",
    url: "http://localhost:3000/about",
    siteName: "Global takers Finance",
    images: [
      {
        url: "http://localhost:3000/og-image.png",
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

