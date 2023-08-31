import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Company } from "../data/companies"; // Import the Company interface

interface Props {
  companies: Company[]; // Change "skills" to "companies"
  options?: EmblaOptionsType;
  subtitle?: string;
}

const EmblaCarousel: React.FC<Props> = ({
  companies,
  options = {},
  subtitle,
}) => {
  const [emblaRef] = useEmblaCarousel(
    {
      ...options,
      loop: true,
      align: "center",
      containScroll: false,
      dragFree: true,
    },
    [
      Autoplay({
        delay: 1000,
        stopOnMouseEnter: true,
      }),
    ]
  );


  return (
    <div className="px-5 py-3 mx-auto bg-gray-300 rounded-lg max-w embla">
      {subtitle && (
        <h2 className="my-3 text-2xl font-bold text-center">{subtitle}</h2>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex space-x-10 embla__container">
          {companies.map((company) => (
            <div key={company.id}>
              <div className="w-16 h-16 p-3 text-4xl bg-gray-400 rounded-full embla__slide__icon">
                <img
                  src={company.iconPath}
                  alt={company.companyName}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
