import MaintenancePage from "@/features/public/maintenance/maintenacePage";

export const metadata = {
  title: "Maintenance – Global takers Technology",
  description: "Our site is currently under maintenance. We'll be back soon.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Technology Team" }],
  openGraph: {
    title: "Maintenance – Global takers Technology",
    description: "Our site is currently under maintenance. We'll be back soon.",
    url: "http://localhost:3000/maintenance",
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

export default function Maintenance() {
  return (
    <MaintenancePage />
  );
}

