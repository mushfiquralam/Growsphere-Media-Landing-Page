import React from 'react';
import kitchen_home from '../Assets/kitchen_home.png'; 

function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${kitchen_home})` }}>
      <div className='py-[180px] text-white text-center'>
        <div className='pt-[61px] mb-[11px] '>
          <p className='text-[25px] drop-shadow-2xl'>
          Streamline Business Growth
          </p>
        </div>
        <div className='text-[59px]'>
          <h2>We Deliver <span className='font-bold text-brandColor'>Ready-to-Quote</span> Home</h2>
          <h2>Improvement Leads, <span className='font-bold text-brandColor'>Effortlessly!</span></h2>
        </div>
        <div className='pt-[11px]'>
          <h2 className=' text-[25px]'>
          No Heavy Lifting Required!
          </h2>
        </div>
        <div className='px-[15px]'>
          <div className='pt-[65px] pb-[15px]'>
            <a href='#' className='bg-brandColor py-[15px] px-[40px] text-[24px] rounded-full font-bold shadow-blue-300 hover:shadow-md hover:shadow-blue-300'>
              Get More Leads
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
