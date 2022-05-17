import Link from "next/link";

const Logo = ({ wrapperClasses = "" }) => (
  <Link href="/">
    <a
      aria-label="Navigate to Tempset HVAC Services home page"
      className={`text-white px-3 py-2 font-bold rounded-md focus:outline-none focus:ring-4 focus:ring-red-600 active:ring-red-500 ${wrapperClasses}`}
      title="Tempset HVAC Services Home"
    >
      <div className="relative text-center">
        <p className="font-mono text-3xl">TEMP<span style={{ background: '-webkit-linear-gradient( #dc2626 35%, #00fffd 50%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>S</span>ET</p>
        <p className="bg-red-500 h-px"></p>
        <p className="font-sans font-bold text-teal-500">
          HVAC SERVICES
        </p>
      </div>
    </a>
  </Link>
);

export default Logo;