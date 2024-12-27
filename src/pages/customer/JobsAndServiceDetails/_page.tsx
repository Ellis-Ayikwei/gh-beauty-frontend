import { Images } from "../../../Assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from "../../../components/button/_component";
import PriceDetails from "../../../components/customers/PriceDetails";
import Description from "./Description";

const JobsAndServiceDetails = () => {
  function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        style={{ width: "47px", height: "47px" }}
        onClick={onClick}
        src={Images.right}
        alt="arrows"
        id={"slick-next"}
      />
    );
  }

  function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
      <img
        className={className}
        style={{ width: "47px", height: "47px" }}
        onClick={onClick}
        src={Images.left}
        alt="arrows"
        id={"slick-prev"}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const handleContact = () => {};
  return (
    <>
      <div className=" bg-slate-100">
        <div className="flex ">
          <div className="w-1/2 mx-48 mt-8">
            <div className="flex items-center justify-between my-8">
              <h3>back</h3>
              <Button
                classNames="bg-black"
                onClick={() => handleContact}
                name="Contact Seller"
              />
            </div>
            <Slider {...settings}>
              <div>
                <img className="w-full h-96" src={Images.one} alt="" />
              </div>
              <div>
                <img className="w-full h-96" src={Images.two} alt="" />
              </div>
              <div>
                <img className="w-full h-96" src={Images.three} alt="" />
              </div>
            </Slider>
          </div>
          <div className="mt-8 ml-12">
            <PriceDetails />
          </div>
        </div>
        <Description />
      </div>
    </>
  );
};

export default JobsAndServiceDetails;
