import React from 'react';
import brandLogoWithoutName from '../Assets/brand_logo.jpg';

function Footer() {
  return (
    <div className='p-[15px] border-t-4 border-brandColor'>
      <div className='py-[10px] px-[5px]'>
        <div className='flex justify-center items-center'>
        <img className='h-[80px] w-[80px]' src={brandLogoWithoutName} alt="brand logo" />
        </div>
        <div className='text-center font-semibold text-lg'>
          <p>Growsphere Media</p>
        </div>
      </div>
    </div>
  )
}

export default Footer