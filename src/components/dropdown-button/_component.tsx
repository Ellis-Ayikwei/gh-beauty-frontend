import React from "react";
import { IDropdownButton } from "../../core/interfaces";
import { Images } from "../../Assets";

const DropdownButton: React.FC<IDropdownButton> = ({ label, onClick }) => {
  return (
    <button
      className="w-64 px-4 py-2 text-white bg-[#00BFAE] rounded-lg shadow hover:bg-teal-600 focus:outline-none w-[200px]"
      onClick={onClick}
    >
      <div className="flex items-center justify-between">
        <div>
          <img src={Images.blacksearch} className="w-4" alt="" />
        </div>
        <div>
          <span>{label}</span>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default DropdownButton;
