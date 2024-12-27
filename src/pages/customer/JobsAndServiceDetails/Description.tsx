import { Images } from "../../../Assets";
import Accordion from "../../../components/accordion/_component";

const Description = () => {
  const accordionItems = [
    {
      id: 1,
      title: "Store address",
      content: "React is a JavaScript library for building user interfaces.",
    },
  ];
  return (
    <div className="flex justify-center mt-8">
      <div className="w-9/12 bg-white">
        <div className="flex">
          <div className="w-1/2">
            <h3 className="text-2xl">Laptops</h3>
            <div className="flex text-gray-200">
              <img className="w-4" src={Images.location} alt="" />
              <h3>Lapaz</h3>
            </div>
            <hr className="my-3" />
          </div>
        </div>

        <h3>Description</h3>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <small className="uppercase">type</small>
            <h3>Laptop</h3>
            <small className="uppercase">model</small>
            <h3>Inspiron</h3>
            <small className="uppercase">condition</small>
            <h3>New</h3>
            <small className="uppercase">type</small>
            <h3>Laptop</h3>
          </div>
          <div>
            <small className="uppercase">brand</small>
            <h3>Dell</h3>
            <small className="uppercase">model</small>
            <h3>Inspiron</h3>
            <small className="uppercase">condition</small>
            <h3>New</h3>
            <small className="uppercase">type</small>
            <h3>Laptop</h3>
          </div>
        </div>
        <hr className="my-3" />
        <Accordion items={accordionItems} />
        <hr className="my-3" />
      </div>
    </div>
  );
};

export default Description;
