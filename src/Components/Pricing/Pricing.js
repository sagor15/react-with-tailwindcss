import React from "react";
import PricingOption from "../PricingOption/PricingOption";

const Pricing = () => {
  const pricingOption = [
    { id: 1, name: "free", price: 0 },
    { id: 2, name: "Regular", price: 9.99 },
    { id: 2, name: "Premum", price: 10.99 },
  ];
  return (
    <div className="bg-indigo-300 p-4 mt-4">
      <h1 className="text-6xl font-mono text-white">Beat deals of the town</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum hic facere deleniti quis eius veniam
        itaque! Dignissimos libero voluptatem culpa?
      </p>
      <div className="grid md:grid-cols-3 gap-3 mt-8 rounded-lg">
        {pricingOption.map((option) => (
          <PricingOption key={option.id} option={option}></PricingOption>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
