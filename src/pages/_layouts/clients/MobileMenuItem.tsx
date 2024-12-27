import { useNavigate } from "react-router-dom";
import { IMobileMenuItem } from "../../../core/interfaces";

const MobileMenuItem = (props: IMobileMenuItem) => {
  const navigate = useNavigate();

  const handleClick = () => {
    props.onSelect();
    navigate(props?.href);
  };

  return (
    <div
      className="flex items-center justify-between py-3 cursor-pointer"
      onClick={() => handleClick()}
    >
      <div className="flex items-center gap-3">
        <img src={props.icon} alt="img" className="object-contain w-5 h-5" />
        <p className="text-[#858997] text-[13px]">{props.label}</p>
      </div>

      <div className="flex items-center gap-6">
        {props.badge && (
          <div className="bg-[#FEF9C3] text-[#EAB308] rounded-full py-[1px] text-[8px] px-[6px]">
            9
          </div>
        )}
        <p className="text-[#858997] text-[13px]">hi</p>
      </div>
    </div>
  );
};

export default MobileMenuItem;
