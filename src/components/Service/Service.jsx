import React from "react";
import Image from "next/image";

const Individual = ({
  description = "This is an example of a description. This is an example of a description. This is an example of a description.",
  icon,
  name = "Service Name",
}) => (
  <div className="text-center mb-4 opacity-90 block relative m-2 p-4 sm:m-3 sm:p-3 md:m-4 rounded-lg h-full shadow-2xl">
    <div className="text-center mb-4">
      <p className="text-2xl text-gray-800 mb-4">{name}</p>
      <Image src={icon} height="50px" width="50px" />
    </div>

    <div className="pt-4 mt-4 flex border-t border-gray-200 mx-auto text-gray-500 items-center justify-around">
      {description && <p className="max-w-xs my-4 mx-auto">{description}</p>}
    </div>
  </div>
);

export default Individual;
