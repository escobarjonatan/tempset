import React from "react";
import Flickity from "react-flickity-component";
import Image from "next/image";
import slideOne from "../../../public/images/slideshow/attic.jpg";
import slideTwo from "../../../public/images/slideshow/commercial.jpg";
import slideThree from "../../../public/images/slideshow/exterior.jpg";
import slideFour from "../../../public/images/slideshow/filter.jpg";
import slideFive from "../../../public/images/slideshow/goodman.jpg";
import slideSix from "../../../public/images/slideshow/roof.jpg";
import slideSeven from "../../../public/images/slideshow/wires.jpg";

const Carousel = () => (
  <Flickity
    className="cursor-pointer overflow-hidden outline-none relative mt-11 text-gray-500"
    options={{ wrapAround: true }}
  >
    <Image
      src={slideOne}
      alt="HVAC unit shown in house attic"
      height="960"
      width="1280"
    />
     <Image
      src={slideTwo}
      alt="Commercial HVAC unit"
      height="960"
      width="1280"
    />
        <Image
      src={slideThree}
      alt="Home exterior"
      height="960"
      width="1280"
    />
     <Image
      src={slideFour}
      alt="HVAC filter"
      height="960"
      width="1280"
    />
        <Image
      src={slideFive}
      alt="Goodman brand HVAC unit"
      height="960"
      width="1280"
    />
     <Image
      src={slideSix}
      alt="Roof HAVAC unit shown"
      height="960"
      width="1280"
    />
        <Image
      src={slideSeven}
      alt="HVAC wiring shown"
      height="960"
      width="1280"
    />
  </Flickity>
);

export default Carousel;
