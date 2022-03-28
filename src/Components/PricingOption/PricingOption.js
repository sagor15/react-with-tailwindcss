import React from "react";
import Benifit from "../Benifit/Benifit";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

const PricingOption = (props) => {
  const { name, price, benifits } = props.option;
  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-xl bg-indigo-300 py-4 rounded-lg font-bold">{name}</h2>
      <p>
        <span className="text-5xl font-bold"> ${price}</span>
        <span className="text-xl font-bold text-gray-500">/month</span>
      </p>
      <div>
        <h3 className="text-xl py-5">Awsome Benifits</h3>
        {benifits.map((benifit) => (
          <Benifit benifit={benifit}></Benifit>
        ))}
      </div>
      <button className="bg-green-400 text-white w-full py-2 rounded-lg mt-6 flex items-center justify-center ">
        Buy Now <ArrowCircleRightIcon className="w-5 h-5 ml-2"></ArrowCircleRightIcon>
      </button>
    </div>
  );
};

export default PricingOption;
