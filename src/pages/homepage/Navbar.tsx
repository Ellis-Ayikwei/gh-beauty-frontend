import { Images } from "../../Assets";
import Button from "../../components/button/_component";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/_component";

const Navbar = () => {
  const navigate = useNavigate();
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <>
      <nav className="flex justify-between md:max-w-[1700px] py-[13px] mx-auto">
        <h3 className="text-white">GH Beauty Logo</h3>
        <div className="flex flex-col">
          <div className="relative">
            <input
              type="text"
              className="max-w-[720px] min-w-[360px] text-[12px] outline-0 p-3 h-[40px] rounded-[12px]"
              placeholder="Search for services | Accra - Ghana"
            />
            <div className="absolute ml-8 right-8 top-[6px]">
              <img
                className="p-[7px] w-7 bg-[#1F4E79] rounded-[8px]"
                src={Images.search}
                alt=""
              />
            </div>
          </div>
          <div className="flex -ml-4">
            <Dropdown
              options={["Option 1", "Option 2", "Option 3"]}
              placeholder="Restaurant"
              onSelect={handleSelect}
            />
            <Dropdown
              options={["Option 1", "Option 2", "Option 3"]}
              placeholder="Home Services"
              onSelect={handleSelect}
            />
            <Dropdown
              options={["Option 1", "Option 2", "Option 3"]}
              placeholder="Beautician"
              onSelect={handleSelect}
            />
          </div>
        </div>

        <h3 className="text-white cursor-pointer">Write some Review</h3>
        <div>
          <Button
            onClick={() => navigate("/login")}
            classNames="bg-[#F7F4F470] mr-3 !rounded-[8px] text-white"
            name="Log in"
          />
          <Button
            onClick={() => navigate("/signup")}
            classNames="bg-[#1F4E79] text-white !rounded-[8px]"
            name="Sign up"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
