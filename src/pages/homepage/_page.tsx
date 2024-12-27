import { Images } from "../../Assets";
import DropdownButton from "../../components/dropdown-button/_component";
import Categories from "./Categories";
import Navbar from "./Navbar";
import Reviews from "./Reviews";

const HomePage = () => {
  const handleButtonClick = () => {
    console.log("Dropdown button clicked!");
  };
  return (
    <>
      <div className="bg-[#000000] h-screen">
        <Navbar />
        <div className="flex items-center justify-between ml-[10rem]">
          <div className="flex items-center">
            <div className="flex flex-col mr-8">
              <img className="h-[66px] mb-3" src={Images.rect1} alt="" />
              <img className="h-[66px] mb-3" src={Images.rect2} alt="" />
              <img className="h-[66px] mb-3" src={Images.rect2} alt="" />
            </div>
            <div>
              <h1 className="text-[88px] font-bold text-white">
                A touch of Beauty
              </h1>
              <DropdownButton label="Beautician" onClick={handleButtonClick} />
            </div>
          </div>
          <img className="h-[760px] w-[846px]" src={Images.banner} alt="" />
        </div>
      </div>
      <Categories />
      <Reviews />
    </>
  );
};

export default HomePage;
