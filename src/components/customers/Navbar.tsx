import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { clientNavItems } from "../../data";
import { Images } from "../../Assets";
import { Modal } from "../modal/_component";
import Button from "../button/_component";

const ClientNavbar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const navigate = useNavigate();
  const pathName = useLocation();
  const location = pathName.pathname;

  const closeModal = () => {
    setShowModal(false);
  };

  const confirmLogout = () => {
    navigate("/");
  };
  return (
    <>
      <Modal close={closeModal} open={showModal}>
        <div className="p-10 bg-white">
          <div className="flex w-16 m-auto">
            <img src={Images.query} />
          </div>
          <div>
            <h3 className="mt-3 text-sm font-medium text-center text-black">
              Are you sure you want to logout?
            </h3>
            <div className="flex mx-10 my-3 mt-6">
              <Button
                classNames="mr-3 text-white bg-black "
                type={"submit"}
                name={"No"}
                onClick={closeModal}
              />
              <Button
                classNames="text-white bg-red-500 "
                type={"submit"}
                name={"Yes"}
                onClick={confirmLogout}
              />
            </div>
          </div>
        </div>
      </Modal>

      {/************** Desktop Navbar ****************/}
      <nav className="flex items-center justify-between h-16 px-3 max-sm:hidden">
        <div className="flex items-center">
          <h3>Logo</h3>
          <h3>Gh Beauty</h3>
        </div>
        <div className="cursor-pointer">
          {clientNavItems?.map((cn: any, i: number) => (
            <a
              key={i}
              onClick={() => navigate(cn.href)}
              className={` md:text-[15px] px-4 py-2 hover:text-[#4397EA] ${
                cn.href === location ? " border-b-[1px] border-blue-500" : ""
              }`}
            >
              {cn.label}
            </a>
          ))}
        </div>
        <div
          onClick={() => setShowModal(true)}
          title="logout"
          className="flex items-center cursor-pointer"
        >
          <Button
            onClick={() => navigate("/client/dashboard")}
            classNames="bg-black mr-4 !py-[5px]"
            name="Start Selling"
          />
          <img className="w-8 h-8" src={Images.logout} alt="logout" />
        </div>
      </nav>

      {/************** Mobile Navbar ****************/}
      <div className="md:hidden">
        <div className="flex items-center justify-between h-16">
          <div>
            <NavLink to="/" style={{ color: "#000" }}>
              Logo
            </NavLink>
          </div>
          <a
            className="me-1.5 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out  focus:outline-none focus:ring-0 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            data-twe-offcanvas-toggle
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img src={Images.close} className="w-8" />
          </a>
        </div>

        <div
          className="invisible w-80 fixed bottom-0 left-0 top-0 z-[1045] flex max-w-full -translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
          tabIndex={-1}
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          data-twe-offcanvas-init
        >
          <div className="flex items-center justify-between p-4">
            <h5
              className="mb-0 font-semibold leading-normal"
              id="offcanvasExampleLabel"
            >
              Menu
            </h5>
            <button
              type="button"
              className="box-content border-none rounded-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
              data-twe-offcanvas-dismiss
              aria-label="Close"
            >
              <span className="[&>svg]:h-6 [&>svg]:w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </span>
            </button>
          </div>
          <div className="relative flex flex-col h-full p-4 overflow-y-auto">
            <div className={`flex flex-col`}>
              {clientNavItems?.map((cn: any, i: number) => (
                <a
                  key={i}
                  onClick={() => navigate(cn.href)}
                  className={`text-black md:text-[15px] px-4 py-2 hover:text-[#4397EA]`}
                >
                  {cn.label}
                </a>
              ))}
            </div>
            <div
              onClick={() => setShowModal(true)}
              title="logout"
              className="absolute flex items-center cursor-pointer bottom-8"
            >
              <img className="w-8 h-8" src={Images.logout} alt="logout" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientNavbar;
