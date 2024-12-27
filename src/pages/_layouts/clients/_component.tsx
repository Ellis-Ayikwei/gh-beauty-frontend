import NavigationBar from "./NavigationBar";
import Sidemenu from "./SideMenu";
import { Outlet } from "react-router-dom";

const ClientLayout = () => {
  return (
    <>
      <div className="relative">
        {/* navigation bar */}
        <NavigationBar />

        {/* body */}
        <div className="h-full bg-[#edf2f5] md:max-w-[90%] mx-auto min-h-screen p-[3px] md:mt-[60px] mt-[120px] relative overflow-hidden">
          <Sidemenu />
          <div className="py-6 md:pl-1 min-w-[90%] md:ml-[60px] ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLayout;
