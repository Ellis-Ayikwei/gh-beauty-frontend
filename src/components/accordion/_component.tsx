import React from "react";
import { IAccordionItems } from "../../core/interfaces";

const Accordion = (props: IAccordionItems) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="w-full max-w-md space-y-4">
        {props.items.map((item, index) => (
          <div key={item.id} className="border border-gray-300 rounded-lg">
            {/* Accordion Header */}
            <button
              className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <span className="font-medium text-gray-800">{item.title}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {activeIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Accordion;
