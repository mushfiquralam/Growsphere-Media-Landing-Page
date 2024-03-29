import React from 'react';
import Brand_logo from "../Assets/brand_logo.jpg";

function Nav() {
  return (
    <div className='h-[120.75px] pt-5 pb-3 flex justify-center items-center'>
      <img className='h-full' src={Brand_logo} alt="brand logo" />
      <p className='text-center font-semibold text-lg'>
      Growsphere Media
      </p>
    </div>
  );
};

export default Nav;
