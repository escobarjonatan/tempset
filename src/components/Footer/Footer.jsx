const Footer = () => (
  <footer className='relative bg-black text-white text-center py-10 sm:px-6 lg:px-8 mt-20'>
    <div className='flex max-w-sm mx-auto justify-around mb-8'>
      <a
        aria-label='Instagram link for Temptset HVAC Services'
        className='p-2 hover:text-teal-500 active:text-teal-600 rounded-md focus:outline-none focus:ring-4 focus:ring-teal-600 active:ring-teal-500'
        href='https://www.instagram.com/tempsethvac/'
        rel='noreferrer'
        target='_blank'
      >
        <svg
          className='text-xl transition-colors duration-200'
          fill='currentColor'
          height='27'
          style={{ enableBackground: 'new 0 0 512 512' }}
          viewBox='0 0 512 512'
          width='27'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M427.413 50.087h-53.435c-15.981 0-28.935 12.954-28.935 28.935v53.435c0 15.979 12.954 28.935 28.935 28.935h53.435c15.981 0 28.935-12.955 28.935-28.935V79.022c0-15.981-12.954-28.935-28.935-28.935zm6.674 82.137c0 3.679-2.06 6.906-5.745 6.906h-53.435c-3.685 0-7.603-3.227-7.603-6.906V78.789c0-3.679 3.918-6.441 7.603-6.441h53.435c3.685 0 5.745 2.762 5.745 6.441v53.435z' />
          <path d='M403.462 5.565H109.907C49.821 5.565 0 54.365 0 114.637v282.261c0 60.272 49.821 109.537 109.907 109.537h293.554C463.549 506.435 512 457.17 512 396.898V114.637C512 54.365 463.549 5.565 403.462 5.565zm86.277 391.333c0 47.994-38.462 87.276-86.277 87.276H109.907c-47.815 0-87.647-39.281-87.647-87.276V217.043h138.83c-29.87 25.044-48.856 63.336-48.856 105.622 0 76.717 62.413 139.072 139.13 139.072s139.13-62.325 139.13-139.042c0-42.288-18.989-80.609-48.859-105.652h148.103v179.855zM251.364 205.681c64.445 0 116.87 52.429 116.87 116.87s-52.424 116.87-116.87 116.87-116.87-52.429-116.87-116.87 52.424-116.87 116.87-116.87zm238.375-10.898H305.864c-16.747-8.348-35.168-11.13-54.5-11.13-19.334 0-37.756 2.783-54.503 11.13h-174.6v-80.145c0-47.995 39.832-86.811 87.647-86.811h293.554c47.815 0 86.277 38.817 86.277 86.811v80.145z' />
          <path d='M251.364 239.072c-46.033 0-83.478 37.446-83.478 83.478 0 46.033 37.446 83.478 83.478 83.478 46.033 0 83.478-37.446 83.478-83.478s-37.445-83.478-83.478-83.478zm0 144.696c-33.75 0-61.217-27.462-61.217-61.217s27.467-61.217 61.217-61.217 61.217 27.462 61.217 61.217c.001 33.755-27.467 61.217-61.217 61.217z' />
        </svg>
      </a>
      <a
        aria-label='Facebook link for Temptset HVAC Services'
        href='https://www.facebook.com/tempsethvac/'
        rel='noreferrer'
        target='_blank'
        className='p-2 hover:text-teal-500 active:text-teal-600 rounded-md focus:outline-none focus:ring-4 focus:ring-teal-600 active:ring-teal-500'
      >
        <svg
          className='text-xl transition-colors duration-200'
          fill='currentColor'
          height='30'
          viewBox='0 0 1792 1792'
          width='30'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z'></path>
        </svg>
      </a>
    </div>
    <p className='px-4'>
      Copyright &#169; {`${new Date().getFullYear()}`} Temptset HVAC Services.
      All rights reserved.
    </p>
  </footer>
);

export default Footer;
