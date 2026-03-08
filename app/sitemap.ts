import { MetadataRoute } from "next";
import { getAllContent } from "@/lib/content";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://wiscosac.org";

  const content = await getAllContent();

  const contentUrls = content.map((item) => ({
    url: `${baseUrl}${item.permalink}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/Meetings`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/workshop`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calendar`,
      lastModified: new Date(),
    },
    ...contentUrls,
  ];
}