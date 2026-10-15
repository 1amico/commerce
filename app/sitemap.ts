import { MetadataRoute } from "next";
import { locales } from "lib/i18n";
import { baseUrl } from "lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    ["", "/shop", "/cart"].map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: now,
    }))
  );
}
