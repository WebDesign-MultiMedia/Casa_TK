import { useEffect } from "react";
import { business } from "../data/business";

const SITE_URL = "https://casa-tk.vercel.app";

// Injects LocalBusiness JSON-LD once per app load so Google can surface
// Casa TK's hours, rating, and address directly in search results.
export default function StructuredData() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: business.name,
      image: `${SITE_URL}/gallery/bakery-case-2.jpg`,
      url: SITE_URL,
      telephone: business.phoneHref,
      priceRange: "$",
      servesCuisine: "Mexican bakery, coffee",
      address: {
        "@type": "PostalAddress",
        streetAddress: business.address.line1,
        addressLocality: "Bronx",
        addressRegion: "NY",
        postalCode: "10472",
        addressCountry: "US",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: business.rating,
        reviewCount: business.ratingCount,
      },
      sameAs: [business.instagramUrl, business.tiktokUrl],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "06:00",
          closes: "23:59",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "06:00",
          closes: "22:00",
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => script.remove();
  }, []);

  return null;
}
