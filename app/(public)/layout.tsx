import { PublicHeader } from "@/components/layout/PublicHeader";
import  PublicFooter  from "@/components/layout/Footer";
import MaintenancePage from "./maintenance/page";


export const metadata = {
  title: " – Global takers Finance",
  description: "Global takers Finance default description.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Finance Team" }],
  openGraph: {
    title: " – Global takers Finance",
    description: "Global takers Finance default description.",
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
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NEXT_PUBLIC_MAINTENANCE === "true") {
    return <MaintenancePage />;
  }

  return (
    <>
      <PublicHeader />
      <main>{children}</main>
      <PublicFooter />
    </>
  );
}
