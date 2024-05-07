import React, { useState } from 'react';
import { Raleway } from 'next/font/google';


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className={`${isOpen ? 'fixed inset-0 bg-black bg-opacity-50' : 'absolute right-0'} font-serif h-full z-40`}>
            {/* Hamburger Icon */}
            <button
                className="block p-4 focus:outline-none"
                onClick={toggleMenu}
                style={{ zIndex: 500 }} // Ensure the button is above the overlay
            >
                <div className={`${isOpen ? 'hidden' : 'block'}`}>
                    <span className="block w-8 h-0.5 bg-white"></span>
                    <span className="block w-8 h-0.5 bg-white mt-2"></span>
                    <span className="block w-8 h-0.5 bg-white mt-2"></span>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 right-0 mt-2 p-4 z-50`}>
                    <span className="block w-8 h-0.5 bg-white transform rotate-45 "></span>
                    <span className="block w-8 h-0.5 bg-white transform -rotate-45"></span>
                </div>
            </button>

            {/* Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-40`}>
              <div className="flex flex-col justify-center text-center h-full">
                <a href="/details" className="block p-4 text-lg text-white hover:underline">Details</a>
                <a href="/rsvp" className="block p-4 text-lg text-white hover:underline">RSVP</a>
                <a href="/taxisandaccomodation" className="block p-4 text-lg text-white hover:underline">Taxis & Accommodation</a>
                <a href="/faq" className="block p-4 text-lg text-white hover:underline">FAQ</a>

              </div>
            </div>
        </div>
    );
};

export default HamburgerMenu;
