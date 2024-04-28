import React from 'react';
import Image from 'next/image'

const InfoCard: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const updateWidth = () => {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      setIsMobile(screenWidth < 768);
    };

    // Call once to set initial state
    updateWidth();

    // Set up event listener for window resize
    window.addEventListener('resize', updateWidth);

    // Clean up event listener
    return () => window.removeEventListener('resize', updateWidth);
  }, []);



  return (
    <div className='m-6'>
      <h1 className="text-5xl font-light md:text-6xl text-slate-100 text-center amsterdam-four py-6 leading-extra-loose">Event Details</h1>
      <div className="flex flex-col md:flex-row lg:m-6 pt-2 font-serif font-thin text-slate-100 text-center mt-10">

        <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

        </div>
        <div className="md:w-1/3 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">
          <div className="z-10 my-20 ">
            <h2 className='text-5xl'>Where?</h2>
            <p className="mb-4 underline mt-11 text-2xl uppercase">Hanbury Wedding Barn</p>
            <p className=" mb-4 mt-11 text-xl uppercase">Parsons Break Farm, Hanbury, Burton-on-Trent, DE13 8TN <a href='https://hanburybarns-venue.co.uk/' target='_blank' className="text-xl lowercase underline">(Website)</a></p>

          </div>
          <div className=''>
            <p>🤍</p>
          </div>
        </div>
        <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

        </div>


        <div className="md:w-1/3 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">
          <div className="z-10 my-20 ">
            <h2 className='text-5xl'>When?</h2>
            <p className="mb-4 underline mt-11 text-2xl uppercase">7th December 2024</p>
            <p className=" mb-4 mt-11 text-xl uppercase">Please arrive at the venue by <b>1pm</b> for the ceremony to begin <b>1.30pm</b></p>
          </div>
          <div className=''>
            <p>🤍</p>
          </div>
        </div>
        <div className="md:w-1/5 md:text-red md:p-0 md:m-0 relative sm:w-2/3 m-auto">

        </div>


      </div>
      <p className="mb-6 underline mt-11 text-2xl uppercase m-auto w-full text-center font-serif text-slate-100 pb-10">Schedule of the day</p>
      {isMobile
        ? <Image src="/timeline-vertical.png" alt="a timeline of the day" className="w-full max-w-4xl m-auto" width={300} height={300} />
        : <Image src="/timeline.png" alt="a timeline of the day" className="w-full max-w-4xl m-auto" width={300} height={300} />
      }
      <p className="text-slate-100 font-serif text-center mb-4 mt-11 text-xl uppercase">Any questions about the day please reach out to Tom or Lottie</p>
      <p className='text-center'>🤍</p>
    </div>
  );
}


export default InfoCard;
