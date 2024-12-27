import React from "react";
import { Images } from "../../Assets";

const PriceDetails = () => {
  const [counter, setCounter] = React.useState<number>(1);
  const [price] = React.useState<number>(150);

  const add = () => {
    setCounter(counter + 1);
  };
  const subtract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="p-8 bg-white w-72 rounded-[12px] mt-8">
      <h3 className="text-3xl">GHS {price}</h3>
      <div className="flex my-4">
        <img
          onClick={subtract}
          className="w-6 cursor-pointer"
          src={Images.subtract}
          alt=""
        />
        <span className="mx-8">{counter}</span>
        <img
          onClick={add}
          className="w-6 cursor-pointer"
          src={Images.add}
          alt=""
        />
      </div>
      <div className="flex">
        <h3 className="mr-2">Total price to be paid:</h3>
        {"GHS "}
        <span className="ml-1 ">{price * counter}</span>
      </div>
      <hr className="my-3" />
      <div>
        <div className="flex items-center">
          <h3>Safety tips </h3>
          <img className="w-4 mt-1 ml-3" src={Images.info} alt="" />
        </div>
        <ul className="list-disc text-[12px] text-gray-500">
          <li>Avoid paying in advance, even for delivery</li>
          <li>Meet with the seller at a safe public place</li>
          <li>Inspect the item and ensure it's exactly what you want</li>
          <li>Make sure that the packed item is the one you've inspected</li>
          <li>Only pay if you're satisfied</li>
        </ul>
      </div>
    </div>
  );
};

export default PriceDetails;
