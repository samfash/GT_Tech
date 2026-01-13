import HomePage from "@/features/public/home/HomePage";


export const metadata = {
  title: "Home - – Global takers Finance",
  description: "Welcome to Global takers Finance and what we do.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Technology Team" }],
  openGraph: {
    title: "Home - Global takers Finance",
    description: "Welcome to Global takers Finance and what we do.",
    url: "http://localhost:3000",
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

export default function Home() {
  // throw new Error("Test error page");
  
  return <HomePage />;
}
