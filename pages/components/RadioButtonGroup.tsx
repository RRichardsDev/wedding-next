import React, { useState } from 'react';

function RadioButtonGroup() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleChange = (event: any) => {
    setSelectedOption(event);
  };

  return (
    <div>
      <label id="main" className="flex flex-wrap justify-center items-center w-full text-3xl mb-10">
        Main:
      </label>
      <p>Select an option:</p>
      {/* <form> */}
        <div>
          <input
            type="radio"
            value="1"
            checked={selectedOption === 1}
            onChange={()=>handleChange(1)}
          />
        </div>
        <div className='max-w-xl text-center flex justify-center mx-auto'>
        Slow cooked shoulder of lamb stuffed with oregano, mint & lemon. Served with fresh mint sauce & redcurrant & red wine reduction
        </div>
        <div>
          <input
            type="radio"
            value="2"
            checked={selectedOption === 2}
            onChange={()=>handleChange(2)}
          />
        </div>
        <div>
        Slow cooked pork belly with caramelised apples, apple compote &; crackling
        </div>
        <div>
          <input
            type="radio"
            value="3"
            checked={selectedOption === 3}
            onChange={()=>handleChange(3)}
          />
        </div>
        <div>
        Roast Mediterranean filo parcels with basil oil. (V and Vg)
        </div>
      {/* </form> */}
    </div>
  );
}

export default RadioButtonGroup;
