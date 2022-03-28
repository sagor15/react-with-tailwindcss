import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const Benifit = (props) => {
  return (
    <p className="flex items-center ">
      <CheckCircleIcon className="w-6 h-6 text-green-400 ml-4 "></CheckCircleIcon>
      {props.benifit}
    </p>
  );
};

export default Benifit;
