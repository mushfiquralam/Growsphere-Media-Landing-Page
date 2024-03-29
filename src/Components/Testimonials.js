import React from 'react';

function Testimonials() {
  const testimonialData = [
    {
      reviewer: "- Ashfaq Zaman",
      review: "Thanks to Growsphere Media, my inbox is now overflowing with eager clients, not just spam! Their genius strategies turned my leads from trickle to flood. 10/10, would recommend for anyone serious about business growth!",
    },
    {
      reviewer: "- MD. Sifat",
      review: "With Growsphere media, leads poured in faster than I could say 'sold!' They know how to turn clicks into clients like magic.",
    }
  ];

  return (
    <div className="dark:bg-gray-100 dark:text-gray-800 pb-10">
      <div className="container flex flex-col items-center mx-auto md:p-10 md:px-12">
        <h1 className="p-4 text-[47px] font-semibold leading-none text-center">What our customers are saying about us</h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 pb-4">
        {testimonialData.map((data, index) => (
          <div key={index} className="flex flex-col max-w-sm mx-4 h-[470px] shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50 h-[85%]">
              <p className="relative px-6 py-8 text-lg italic text-center dark:text-gray-800 overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 text-brandColor">
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {data.review}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 text-brandColor">
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-brandColor dark:text-gray-50 h-[15%]">
              <p className="text-xl font-semibold leading-tight">{data.reviewer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
