import React, { useState } from "react";

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    flagImage: "https://www.worldometers.info//img/flags/small/tn_as-flag.gif",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    flagImage: "https://www.worldometers.info//img/flags/small/tn_al-flag.gif",
  },
  {
    name: "Canada",
    flag: "🇨🇦",
    flagImage: "https://www.worldometers.info//img/flags/small/tn_ca-flag.gif",
  },
  // Add more countries as needed
];

const Dropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-10">
      <div>
        <button
          type="button"
          className="inline-flex justify-start items-center gap-2 w-full rounded-md py-2 px-1 bg-white text-sm font-medium text-gray-700 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="w-6 h-6 object-contain"
            src={selectedCountry.flagImage}
            alt={selectedCountry.name}
          />
          <span>{selectedCountry.name}</span>
          <svg
            className={`${
              isOpen ? "transform rotate-180" : ""
            } -mr-1 ml-2 h-5 w-5`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => handleSelectCountry(country)}
                className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${
                  selectedCountry === country ? "bg-gray-100" : ""
                }`}
                role="menuitem"
              >
                <div className="flex  justify-start gap-2 items-center">
                  <img
                    className="w-6 h-6 ml-2 object-cover"
                    src={country.flagImage}
                    alt={country.name}
                  />
                  <span>{country.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
