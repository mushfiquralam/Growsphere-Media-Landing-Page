import React from 'react';
import kitchen_home from '../Assets/kitchen_home.png'; 

function Home() {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${kitchen_home})` }}>
      <div className='py-[243px] text-white text-center'>
        <div className='pt-[61px] mb-[11px] '>
          <p className='text-[25px] drop-shadow-2xl'>
          Streamline Business Growth
          </p>
        </div>
        <div className='text-[59px]'>
          <h2 className=''>We Deliver <span className='font-bold text-brandColor'>Ready-to-Quote</span> Home</h2>
          <h2>Improvement Leads, <span className='font-bold text-brandColor'>Effortlessly!</span></h2>
        </div>
        <div className='pt-[11px]'>
          <p className='text-[25px] '>
          No Heavy Lifting Required!
          </p>
          {/* <h2></h2> */}

        </div>
        

      </div>
    </div>
  );
}

export default Home;
