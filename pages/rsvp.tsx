import { NextPage } from "next";
import { useState } from "react";

const RSVP: NextPage = () => {
  const [showingAttending, setShowingAttending] = useState(false);
  const [showingNotAttending, setShowingNotAttending] = useState(false);
  return (
    <>
      <div className="headings flex mx-auto flex-col text-center">
        <p className="h3 ">RSVP</p>
        <h2>🤍</h2>
        <p className="h3 bigger-text">7th December 2024</p>

        <h2 className="italic">Can you make it?</h2>
      </div>

      <div className="container p-4 mx-auto w-full">
        <form id="rsvp-form" action="./sendEmail.php" method="post">
          <div className="flex flex-col justify-center text-center items-center">
            <div className="form-group flex flex-col items-center">
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="attendance"
                  value="able"
                  className="form-radio mr-2"
                  onClick={() => { setShowingAttending(true); setShowingNotAttending(false) }}
                />
                I am able to attend 😊
              </label>
              {showingAttending && <Attendance showingAttending />}
              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="attendance"
                  value="unable"
                  className="form-radio mr-2"
                  onClick={() => { setShowingNotAttending(true); setShowingAttending(false) }}
                />
                I am unable to attend 😔
              </label>
              {showingNotAttending && <Attendance showingAttending />}

            </div>
            <AttendingDetails showingAttending={showingAttending} />
            <div className="flex justify-center text-center">

              <a className="submit-button" id="submit">Confirm</a>
            </div>
          </div>
        </form >
      </div >
      <div className="container mx-auto description">
        <p className="bigger-text">Hope to see you there!</p>
        <p>🤍</p>
      </div>
    </>
  );
};
const Attendance = ({ showingAttending }: { showingAttending: boolean }) => {
  console.log(showingAttending);

  return (
    <>
      <div className="form-group">
        <label >Name:</label>
        <input required name="name" type="name" className="dotted-input" id="name" placeholder="Tom Riddle" />
      </div>
      <div className="form-group">
        <label >Email:</label>
        <input name="email" type="email" className="dotted-input" id="email" placeholder="name@example.com" />
      </div>
    </>
  )
}
const AttendingDetails = ({ showingAttending }: { showingAttending: boolean }) => {
  if (!showingAttending) return null;
  const [showingDietry, setShowingDietry] = useState(false);
  const handleDietry = () => {
    setShowingDietry(true);
  }

  return (
    <>
      <p>🤍</p>
      <div className="headings flex mx-auto flex-col text-center">
        <p className="h3">Menu Options</p>
      </div>
      <StarterDropdown />
      <MainDropdown />
      <p className="pb-2 font-thin text-white font-serif ">Desert will be a free for all!</p>
      <div className="headings flex mx-auto flex-col text-center">
        <p className="pb-2 font-thin"><i>Each wedding guest will need to complete this <span className="font-semibold">sepearatly</span>.</i></p>
        <p className="pb-2 font-thin">If you have any dietry requirements&nbsp;
          <a onClick={handleDietry} className="underline cursor-pointer">click here</a>.</p>
        {showingDietry && <Dietry />}
        <p>🤍</p>
      </div>
    </>
  )
}
const StarterDropdown = () => {
  return (
    <div className="form-group w-full">
      <label id="starter" className="flex flex-wrap justify-center items-center w-full">
        Starter:
        <select name="drink" defaultValue="" id="drink-select" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2">
          <option value="" disabled hidden>Please Select</option>
          <option value="Prawn Cocktail">Prawn Cocktail</option>
          <option value="Ratotouli">Ratotouli</option>
        </select>
      </label>
    </div>
  )
}
const MainDropdown = () => {
  return (
    <div className="form-group w-full">
      <label id="starter" className="flex flex-wrap justify-center items-center w-full">
        Main:
        <select name="drink" defaultValue="" id="drink-select" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2">
          <option value="" disabled hidden>Please Select</option>
          <option value="Prawn Cocktail">Beef</option>
          <option value="Ratotouli">Fish</option>
          <option value={"dietery"}>Dietry</option>
        </select>
      </label>
    </div>
  )
}
const Dietry = () => {
  return (
    <div className="form-group">
      <label >Dietary Requirements:</label>
      <textarea name="drink" placeholder="Vegan, Soy Intollerant..." id="drink-select" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2" />
    </div>
  )
}

export default RSVP;