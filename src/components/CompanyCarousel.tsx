import React from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Company } from "../data/companies"; // Import the Company interface

/**
 * Represents a carousel of company logos.
 *
 * @component
 *
 * @param {object} props - The component's props.
 * @param {Company[]} props.companies - An array of company objects to display logos.
 * @param {EmblaOptionsType} [props.options] - Embla carousel options.
 * @param {string} [props.subtitle] - An optional subtitle for the carousel.
 *
 * @returns {React.ReactElement} A React element representing the company carousel.
 */
interface Props {
  companies: Company[]; // Change "skills" to "companies"
  options?: EmblaOptionsType;
  subtitle?: string;
}

const CompanyCarrousel: React.FC<Props> = ({
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
        delay: 2000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  return (
    <div className="px-5 py-3 mx-auto rounded-lg bg-newGray embla">
      {subtitle && (
        <h2 className="my-3 text-2xl font-bold text-center">{subtitle}</h2>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex space-x-10 embla__container">
          {companies.map((company) => (
            <div key={company.id}>
              <div className="w-16 h-16 p-3 text-4xl transition-transform transform bg-gray-400 rounded-full embla__slide__icon hover:scale-110">
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

export default CompanyCarrousel;
