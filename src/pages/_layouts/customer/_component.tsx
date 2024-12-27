import ClientNavbar from "../../../components/customers/Navbar";
import { Outlet } from "react-router-dom";

const CustomerLayout = () => {
  return (
    <>
      <ClientNavbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default CustomerLayout;
