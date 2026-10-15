import { MetadataRoute } from "next";
import { baseUrl } from "lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ["", "/shop", "/cart"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
  }));
}
