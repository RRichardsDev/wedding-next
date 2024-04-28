import React from 'react';
import Image from 'next/image'


interface AccommodationInfo {
  name: string;
  description: string;
  distance: string;
}

interface TaxiInfo {
  company: string;
  phoneNumber: string;
}

// Mock data for accommodations and taxis
const accommodations: AccommodationInfo[] = [
  {
    name: 'Hilton - St George\'s Park',
    description: 'Located just 3 miles from Hanbury Barns and less than 20 minutes from Burton upon Trent. The Hilton at St George\'s Park is located on the edge of the National Forest.',
    distance: '3 miles',
  },
  {
    name: 'Premier Inn - Burton on Trent Central',
    description: 'The Premier Inn Hotel is in a great locastion to st George\'s Park just 6.5 miles from the venue.',
    distance: '6.5 miles',
  },
  {
    name: 'Travelodge - Burton Southbound',
    description: 'Only 13 minutes from Hanbury Barns, This value for money hotel is easily accessible from the A38 southbound, 5 miles to the south of Burton on Trent.',
    distance: '5 miles',
  }
];
// Styles
const title = 'text-4xl mb-3 font-thin';

const taxis: TaxiInfo[] = [
  {
    company: 'Barton Family Cars',
    phoneNumber: '01283 712726',
  },
  {
    company: '530 Taxis',
    phoneNumber: '01283 530530',
  },
  {
    company: 'Able Taxis',
    phoneNumber: '01283 543333',
  }
];

const InfoCard: React.FC = () => (
  <div className='m-6'>
    <h1 className="text-6xl font-light text-slate-100 text-center amsterdam-four p-6 py-12">Taxis and Accommodation</h1>
    <div className="flex flex-col md:flex-row lg:m-6 pt-2 font-serif uppercase font-thin text-slate-100 text-center mt-10">

      <div className="md:w-1/2 md:text-red md:p-0 md:m-0 relative">
        <div className="z-10 my-20">
          <h2 className={title}>Accommodation</h2>
          {accommodations.map((place, index) => (
            <div key={index} className="my-10">
              <h3 className="text-2xl underline pb-2">{place.name}</h3>
              <p className="text-sm leading-relaxed py-4">{place.description}</p>
            </div>
          ))}
        </div>

        <Image src="/Suitcase.png" alt="image of suitcase" className="absolute bottom-0 left-0 z-0 object-cover" width={100} height={200} />

        <div className='py-4'>
          <p>🤍</p>
        </div>
      </div>


      <div className="md:w-1/2 p-6 pt-0 mt-20 relative">
        <div className=""> {/* Increased z-index */}
          <h2 className={title}>Taxis</h2>
          <p className="mb-4 underline mt-11 text-xl">Please pre-book your taxis as the venue is rural and we don't want anyone to be stranded.</p>
          {taxis.map((taxi, index) => (
            <div key={index} className="my-10">
              <strong className="font-semibold z-50">{taxi.company}</strong> - <span className="font-thin">{taxi.phoneNumber}</span>
            </div>
          ))}
        </div>
        <Image src="/Car.png" alt="image of a car" className="absolute bottom-0 right-0 -z-50 object-cover" width={300} height={300} /> {/* Reduced z-index */}
        <div className='py-4 z-20'> {/* Increased z-index */}
          <p>🤍</p>
        </div>
      </div>


    </div>
  </div>
);

export default InfoCard;
