import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { profileMenuNavigation, sidemenuIcons } from "../../../data";
import { Images } from "../../../Assets";
import MobileMenuItem from "./MobileMenuItem";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [handleNav, setHandleNav] = useState(false);
  const [handleMenuNav, setHandleMenuNav] = useState(false);
  // Create a ref for the sidebar container
  const sidenavRef: any = useRef(null);

  // Toggle the navigation visibility
  const handleProfileNavToggle = () => setHandleNav(!handleNav);

  const handleMenuNavToggle = () => setHandleMenuNav(!handleMenuNav);

  const handleNavigateToProfile = () => {
    setHandleNav(false);
  };

  // Close the navigation when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      // If click is outside the sidenav
      if (sidenavRef.current && !sidenavRef.current.contains(event.target)) {
        setHandleNav(false);
      }
    };

    // Add the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.href = "/login";

      localStorage.clear();
    }
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <div className="border-b-[0.5px] border-[#bfbfbf64] bg-[white]">
          <div className="flex items-center md:gap-0 gap-4 justify-between py-3 mx-auto md:max-w-[90%] md:px-0 px-7">
            <div className="">
              logo
              {/* <img
                onClick={() => navigate("/")}
                src={Images.applications}
                alt="img"
                className="w-[40px] h-[40px] md:ml-[18px] shadow-sm"
              /> */}
            </div>
            <div className="border-[#E5E5E7] border rounded-[30px] flex items-center gap-2 w-52 md:w-72">
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
            <div className="flex items-center md:gap-5">
              <div
                className="flex items-center"
                onClick={() => handleProfileNavToggle()}
              >
                <div
                  className="rounded-full px-[1.5px] py-[2px] cursor-pointer bg-contain bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${Images.profile})`,
                  }}
                >
                  <div className="bg-transparent border-[2px] border-white rounded-full w-8 h-8 cursor-pointer"></div>
                </div>
                <img
                  src={Images.profile}
                  alt="img"
                  className="w-[20px] cursor-pointer md:block hidden h-[20px] object-contain shadow-sm m-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile only top menu */}
      <div className=" bg-[white] w-full md:hidden block fixed top-[63px] z-20">
        <div className="flex items-center justify-between px-8 py-2 pt-3">
          <div className="flex flex-col items-center">
            <img
              onClick={() => navigate("/")}
              src={Images.X}
              alt="img"
              className="object-contain cursor-pointer"
            />
            <p className="text-[8px] pt-1">Home</p>
          </div>

          {sidemenuIcons?.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <img
                onClick={() => navigate(item.route)}
                src={item.mobileIcon}
                alt="img"
                className="object-contain cursor-pointer"
              />
              <p className="text-[8px] pt-1">{item.label}</p>
            </div>
          ))}
          <div
            className="flex flex-col items-center mt-2 cursor-pointer"
            onClick={() => handleMenuNavToggle()}
          >
            <img
              onClick={() => handleProfileNavToggle}
              src={Images.search}
              alt="img"
              className="object-contain cursor-pointer"
            />
            <p className="text-[8px] pt-5 mt-[-5px]">More</p>
          </div>
        </div>
      </div>

      {/* responsive profile nav */}
      <div
        id="mySidenav"
        ref={sidenavRef}
        className={`h-full fixed top-0 right-0 bg-[white] overflow-x-hidden z-30 shadow ${
          handleNav ? "w-[75%] md:w-[50%] lg:w-[25%]" : "w-0"
        }`}
      >
        <div className="text-black items-center flex justify-end py-3 px-5 mt-[60px]">
          <div>
            <img onClick={handleProfileNavToggle} src={Images.close} />
          </div>
        </div>
        <div className="mt-0 text-[14px] h-full w-[86%] mx-auto">
          <div className="flex gap-3 items-center bg-[#F8F9FA] border border-gray-100 rounded-[20px] p-[25px]">
            <div
              className="rounded-full px-[1.5px] py-[2px] cursor-pointer bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${Images.profile})`,
              }}
            >
              <div className="bg-transparent border-[2px] border-white rounded-full w-14 h-14 cursor-pointer"></div>
            </div>
            <div>
              <p className="text-[16px]">hello world</p>
              <p
                className="text-[13px] text-[#AF7E00] cursor-pointer"
                onClick={handleNavigateToProfile}
              >
                View my profile
              </p>
            </div>
          </div>

          <div className="pt-5">
            {profileMenuNavigation?.map((item, idx) => (
              <MobileMenuItem
                key={idx}
                icon={item.icon}
                label={item.label}
                // badge={item.badge}
                href={item?.href}
                onSelect={() => handleProfileNavToggle()}
              />
            ))}
            <img alt="img" src={Images.logout} className="my-4" />
            <MobileMenuItem
              icon={Images.logout}
              label={"Logout"}
              onSelect={handleLogout}
            />
          </div>
        </div>
      </div>

      {/* responsive menu nav */}
      <div
        className={`h-full fixed top-0 right-0 bg-[white] overflow-x-hidden z-30 shadow ${
          handleMenuNav ? "w-[100%]" : "w-0"
        }`}
      >
        <div className="mt-[96px] text-[14px] w-[86%] mx-auto">
          <div className="flex items-center justify-between">
            <img
              onClick={handleMenuNavToggle}
              className="cursor-pointer"
              src={Images.logout}
              alt=""
            />
            <p className="font-semibold text-[16px]">Menu</p>
            <div></div>
          </div>

          <div className="pt-5 font-light">
            <div className="border-b-[1px] border-t-[1px] border-gray-100 py-1">
              <MobileMenuItem
                icon={Images.logout}
                label={"Home"}
                href={"/"}
                onSelect={handleMenuNavToggle}
              />
            </div>
            {sidemenuIcons?.map((item, idx) => (
              <div key={idx} className="border-b-[1px] border-gray-100 py-1">
                <MobileMenuItem
                  icon={item.mobileIcon}
                  label={item.label}
                  href={item.route}
                  onSelect={handleMenuNavToggle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
