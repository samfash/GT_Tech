import ContactPage from "@/features/public/contact/ContactPage";

export const metadata = {
  title: "Contact Us – Global takers Technology",
  description: "Get in touch with Global takers Technology.",
  keywords: ["contact", "company", "services"],
  authors: [{ name: "Global takers Technology Team" }],
  openGraph: {
    title: "Contact Us – Global takers Technology",
    description: "Get in touch with Global takers Technology.",
    url: "http://localhost:3000/contact",
    siteName: "Global takers Technology",
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

export default function Contact() {
  return (
    <ContactPage />
  );
}
