export const metadata = {
  title: "Dashboard – Global takers Technology",
  description: "User dashboard (protected) for Global takers Technology.",
  keywords: ["about", "company", "services"],
  authors: [{ name: "Global takers Technology Team" }],
  openGraph: {
    title: "Dashboard – Global takers Technology",
    description: "User dashboard (protected) for Global takers Technology.",
    url: "http://localhost:3000/about",
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

export default function DashboardPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Dashboard</h1>
      <p>This is a protected page placeholder.</p>
    </main>
  );
}