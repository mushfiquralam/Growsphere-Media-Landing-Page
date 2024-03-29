import React from 'react';
import leads from '../Assets/leads.png';
import result from '../Assets/result.png';

function Usp() {
  const uspData = [
    {
      image: result,
      usp: "Guaranteed Result"
    },
    {
      image: leads,
      usp: "Qualified Leads"
    }
  ];

  return (
    <div className='py-[15px] grid grid-cols-4 gap-4'>
      <div className='col-span-1'></div>
      <div className='col-span-1 px-[20px] py-[10px] text-center'>
        <div className='p-[10px] flex justify-center'>
          <img className='h-[80px] w-[80px]' src={uspData[0].image} alt="Guaranteed Result Icon" />
        </div>
        <p className='font-bold'>{uspData[0].usp}</p>
      </div>
      <div className='col-span-1 px-[20px] py-[10px] text-center'>
        <div className='p-[10px] flex justify-center'>
          <img className='h-[80px] w-[80px]' src={uspData[1].image} alt="Qualified Leads Icon" />
        </div>
        <p className='font-bold'>{uspData[1].usp}</p>
      </div>
      <div className='col-span-1'></div>
    </div>
  )
}

export default Usp;
