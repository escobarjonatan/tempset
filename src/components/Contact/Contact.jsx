import React, { useEffect } from 'react';

const Location = () => {
  useEffect(() => {
    let day = new Date().getDay();
    document.getElementById('day-' + day).classList.add('font-bold');
  }, []);

  return (
    <>
      <section id='contact' className='bg-white rounded-lg shadow mt-11 p-8'>
        <h2 className='font-bold sm:text-3xl text-xl'>Contact Us</h2>
        <div className='sm:flex text-center align-center justify-center mt-11'>
          <div className='sm:w-1/2 w-full self-center'>
            <div className='mb-3'>
              <span className='font-bold'>Phone: </span>
              <a className='underline' href='tel:832-762-1842'>
                832-762-1842
              </a>
            </div>
            <div className='mb-3'>
              <span className='font-bold'>E-Mail: </span>
              <a className='underline' href='mailto:tempsethvac@gmail.com'>
                tempsethvac@gmail.com
              </a>
            </div>
            <div>
              <p className='font-bold'>Hours:</p>
              <p id='day-1' className='mb-0.5'>
                Monday: 7 AM – 6 PM
              </p>
              <p id='day-2' className='mb-0.5'>
                Tuesday: 7 AM – 6 PM
              </p>
              <p id='day-3' className='mb-0.5'>
                Wednesday: 7 AM – 6 PM
              </p>
              <p id='day-4' className='mb-0.5'>
                Thursday: 7 AM – 6 PM
              </p>
              <p id='day-5' className='mb-0.5'>
                Friday: 7 AM – 6 PM
              </p>
              <p id='day-6' className='mb-0.5'>
                Saturday: 7 AM – 12 PM
              </p>
              <p id='day-0' className='mb-0.5'>
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className='sm:w-1/2 w-full h-96 sm:mt-0 mt-11'>
            <iframe
              aria-hidden='false'
              height='100%'
              loading='lazy'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443090.1892463238!2d-95.68147260128784!3d29.816882411346164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1652642615430!5m2!1sen!2sus'
              style={{ border: 0 }}
              tabIndex='0'
              title='Tempset HVAC Services location using Google Maps'
              width='100%'
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Location;
