import React from 'react';

function Process() {
  const processData = [
    {
      id: 1,
      title: "Content Gathering",
      description: "In our first step, we curate visuals that showcase your craftsmanship. These visuals serve as the cornerstone of our strategy, attracting a larger pool of potential clients to your business.",
    },
    {
      id: 2,
      title: "Ad Campaign Launch",
      description: "Following content collection, we initiate ad campaigns tailored to the curated content. Strategically crafted and strategically placed on prominent social media platforms, these ads captivate audience attention effectively.",
    },
    {
      id: 3,
      title: "Lead Generation",
      description: "In the final stage, we capture data from individuals demonstrating genuine interest in your services. Our focus is on prioritizing quote-ready leads while filtering out non-committal inquiries, ensuring your time is invested where it matters most.",
    }
  ];

  return (
    <div className='pt-[45px] pb-[20px]'>
      <div className='py-[10px] px-[20px] text-center'>
        <h1 className='text-[47px] font-semibold'>
          Our <span className='font-bold text-brandColor'>Process</span>
        </h1>
      </div>
      <div className='pb-[15px] grid grid-cols-1 md:grid-cols-3 gap-4'>
        {processData.map((data) => 
          // <div key={data.id} className='bg-white shadow-md rounded-md'>
          <div className='p-6 grid grid-cols-5 gap-2'>
            <div className='col-span-1 flex justify-center pt-2'>
              <div className='flex items-center justify-center w-14 h-14 bg-brandColor text-white font-bold text-3xl rounded-full'>
                {data.id}
              </div>
            </div>
            <div className='col-span-4 mt-4'>
              <p className='text-2xl font-medium text-black'>{data.title}</p>
              <p className='text-lg text-black'>{data.description}</p>
            </div>
          </div>
          // </div>
        )}
      </div>
    </div>
  );
}

export default Process;
