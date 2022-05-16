import Image from "next/image";
import hero from "../../../public/images/hero.jpg";

const Hero = () => (
  <section className="relative text-center">
    <div className="text-white font-sans font-bold sm:text-xl md:text-3xl text-md w-full px-5 absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <h1 className="">Schedule a visit today!</h1>
      <br />
      <a
        className="underline mt-4"
        href="tel:214-659-3358"
      >
        832-762-1842
      </a>
    </div>
    <Image
      alt="Tempset HVAC Services Hero Image in Houston, Texas"
      layout="responsive"
      placeholder="blur"
      priority
      height="1008"
      width="1792"
      src={hero}
      style={{filter: "brightness(35%)"}}
    />
  </section>
);

export default Hero;
