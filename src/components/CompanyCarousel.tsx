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
  companies: Company[];
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
    <div className="w-full px-5 py-3 mx-auto bg-newGray embla select-none">
      {subtitle && (
        <h2 className="my-3 text-2xl font-bold text-center">{subtitle}</h2>
      )}
      <div className="embla__viewport" ref={emblaRef}>
        <div className="flex embla__container">
          {companies.map((company) => (
            <div
              key={company.id}
              className="flex flex-col items-center px-5 text-center embla__slide"
            >
              <div
                className="w-16 h-16 p-3 transition-transform transform bg-gray-400 rounded-full embla__slide__icon hover:scale-110"
                title={company.companyName}
              >
                <img
                  src={company.iconPath}
                  alt={company.companyName}
                  className="w-full h-full pointer-events-none"
                />
              </div>

              <span className="mt-2 text-xs font-medium text-gray-700 pointer-events-none">
                {company.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarrousel;
