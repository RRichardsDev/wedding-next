import React from 'react';
import Image from 'next/image'

const InfoCard: React.FC = () => (
  <div className='m-6'>
    <h1 className="text-6xl font-light text-slate-100 text-center amsterdam-four p-6 leading-extra-loose">Event Details</h1>
    <div className="flex flex-col md:flex-row lg:m-6 pt-2 font-serif font-thin text-slate-100 text-center mt-10">

      <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

      </div>
      <div className="md:w-1/3 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">
        <div className="z-10 my-20 ">
          <h2 className='text-5xl'>Where?</h2>
          <p className="mb-4 underline mt-11 text-2xl uppercase">Hanbury Wedding Barn</p>
          <p className=" mb-4 mt-11 text-xl uppercase">Parsons Break Farm, Hanbury, Burton-on-Trent, DE13 8TN</p>
        </div>
        <div className='py-4'>
          <p>🤍</p>
        </div>
      </div>
      <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

      </div>


      <div className="md:w-1/3 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">
        <div className="z-10 my-20 ">
          <h2 className='text-5xl'>When?</h2>
          <p className="mb-4 underline mt-11 text-2xl uppercase">7th December 2024</p>
          <p className=" mb-4 mt-11 text-xl uppercase">Please arrive at the veny by <b>1pm</b> for the ceremoney to behing <b>1.30pm</b></p>
        </div>
        <div className='py-4'>
          <p>🤍</p>
        </div>
      </div>
      <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

      </div>


    </div>
    <p className="mb-4 underline mt-11 text-2xl uppercase m-auto w-full text-center font-serif text-slate-100 pb-4">Schedule of the day</p>
    <Image src="/timeline-bigger.png" alt="a timeline of the day" className="w-full max-w-4xl m-auto" width={300} height={300} /> {/* Reduced z-index */}
  </div>
);

export default InfoCard;
