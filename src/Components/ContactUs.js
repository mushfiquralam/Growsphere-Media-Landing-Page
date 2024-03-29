import React from 'react';
import bathroom from '../Assets/Bathroom_image_contact_us.jpg';

function ContactUs() {
  return (
    <div className="bg-center bg-no-repeat bg-cover h-screen" style={{ backgroundImage: `url(${bathroom})` }}>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="text-black relative px-4 py-10 bg-gradient-to-r from-slate-300 to-slate-500 shadow-lg sm:rounded-3xl sm:p-20 opacity-85">
            <form>
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Full Name" name="name" />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Website" name="website" />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email" placeholder="Email" name="email" />
              <input
                className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Phone" name="Phone" />
              <div className="flex justify-between">
                <input
                  className="shadow bg-brandColor hover:bg-indigo-700 text-white font-bold py-2 px-[150px] rounded focus:outline-none focus:shadow-outline"
                  type="submit" value="Get More Leads" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
