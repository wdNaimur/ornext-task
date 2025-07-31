import React from "react";

const trustedLogos = [
  { src: "/trusted-logos/fivetran.png", alt: "Fivetran", height: "h-12" },
  { src: "/trusted-logos/hubspot.png", alt: "Hubspot", height: "h-8.5" },
  { src: "/trusted-logos/drips.png", alt: "Drips", height: "h-12" },
  { src: "/trusted-logos/freshworks.png", alt: "Freshworks", height: "h-9.5" },
  { src: "/trusted-logos/gusto.png", alt: "Gusto", height: "h-8.5" },
  { src: "/trusted-logos/segment.png", alt: "Segment", height: "h-12" },
  { src: "/trusted-logos/postman.png", alt: "Postman", height: "h-12" },
  { src: "/trusted-logos/netflix.png", alt: "Netflix", height: "h-11" },
];
const TrustedSection = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-white font-archivo font-bold text-2xl text-center">
        Trusted by 99+ Founder Worldwide
      </h1>
      <div className="flex flex-wrap justify-center items-center mt-8 gap-x-8 gap-y-4">
        {trustedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className={logo.height}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
