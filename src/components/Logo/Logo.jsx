import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../public/images/logo.jpeg';
const Logo = ({ wrapperClasses = '' }) => (
  <Link href='/'>
    <a
      aria-label='Navigate to Tempset HVAC Services home page'
      className={`text-white px-3 py-2 font-bold rounded-md focus:outline-none ${wrapperClasses}`}
      title='Tempset HVAC Services Home'
    >
      <div className='flex text-center max-w-xs'>
        <Image src={logo} style={{ marginTop: '8px !important' }} />
      </div>
    </a>
  </Link>
);

export default Logo;
