import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gtfinance.com",
      lastModified: new Date(),
    },
    {
      url: "https://gtfinance.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://gtfinance.com/contact",
      lastModified: new Date(),
    },
  ];
}
