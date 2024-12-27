import { Images } from "../../../Assets";
import moment from "moment";
import { useLocation } from "react-router-dom";

const ProfileNav = () => {
  const date = new Date();
  const path = useLocation();
  const location = path.pathname;
  return (
    <div className="flex max-sm:text-[12px] text-[14px] items-center justify-center pt-2">
      <div className="w-8/12 bg-white max-sm:w-11/12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center p-4">
            <img
              className="w-12 h-12 mr-3 max-sm:w-10 max-sm:h-10"
              src={Images.profile}
              alt="Profile"
            />
            <h3>Dennis Boateng</h3>
          </div>
          <div
            className={`border-[#E5E5E7] ${
              location == "/customer/dashboard" ? "hidden" : ""
            } border rounded-[30px] flex items-center gap-2 w-52 md:w-72`}
          >
            <img
              src={Images.search}
              alt="img"
              className="w-[20px] h-[20px] shadow-sm m-2"
            />
            <input
              className="text-[12px] font-light border-0 outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="p-3">{moment(date).format("LL")}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
