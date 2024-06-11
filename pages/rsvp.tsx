"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { slide as Menu } from 'react-burger-menu'
import HamburgerMenu from "./components/HamburgerMenu";
import RadioButtonGroup from "./components/RadioButtonGroup";
import { useRouter } from 'next/router'
import Head from "next/head";

type AttendanceState = 'attending' | 'not-attending' | null;

const RSVP: NextPage = () => {
  const [attendanceState, setAttendanceState] = useState<AttendanceState>(null);

  const handleAttendanceChange = (state: AttendanceState) => {
    setAttendanceState(state);
  };
  useEffect(() => {
    const main = document.cookie.replace(/(?:(?:^|.*;\s*)main\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    console.log(main);
  }, [])

  const router = useRouter()

  const handleSubmit = async () => {
    const name = document.getElementById('name') as HTMLInputElement;
    const email = document.getElementById('email') as HTMLInputElement;
    // const allergies = document.getElementById('allergies') as HTMLInputElement;
    const diet = document.getElementById('diet') as HTMLInputElement ?? "";
    const drink = document.getElementById('drink') as HTMLInputElement ?? "";
    const main = document.cookie.replace(/(?:(?:^|.*;\s*)main\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    const body = {
      attendanceState,
      name: name.value,
      email: email.value,
      allergies: diet.value ?? "N/A",
      diet: diet.value ?? "N/A",
      drink: drink.value ?? "N/A",
      main
    }
    console.log(body);
    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    router.push('/thankyou')
  }

  return (
    <>
      <Head>
        <title>RSVP</title>
        <meta name="description" content="This is a description of my Next.js app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <HamburgerMenu />
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
                  onClick={() => handleAttendanceChange('attending')}
                />
                I am able to attend 😊
              </label>
              {attendanceState === 'attending' && (
                <>
                  <Attendance showingAttending={true} />
                  <AttendingDetails showingAttending={true} />
                </>
              )}

              <label className="flex items-center mb-2">
                <input
                  type="radio"
                  name="attendance"
                  value="unable"
                  className="form-radio mr-2"
                  onClick={() => handleAttendanceChange('not-attending')}
                />
                I am unable to attend 😔
              </label>
              {attendanceState === 'not-attending' && <Attendance showingAttending={true} />}
            </div>
            <div className="flex justify-center text-center">
              <a className="submit-button" id="submit" onClick={handleSubmit}>Confirm</a>

            </div>
          </div>
        </form >
      </div >
      <div className="container mx-auto description">
        {attendanceState === 'attending' && <p className="bigger-text">Looking forward to seeing you there!</p>}
        {attendanceState === 'not-attending' && <p className="bigger-text">Sorry you couldn't make it!</p>}
        <p>🤍</p>
      </div>
    </>
  );
};
const Attendance = ({ showingAttending }: { showingAttending: boolean }) => {
  console.log(showingAttending);
  if (!showingAttending) return null;

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
      <Drink />
      <StarterDropdown />
      <MainDropdown />
      <p className="mt-10  font-thin text-white font-serif max-w-sm ">All Mains are served with Baby Roast Potatoes and Roasted Carrots </p>

      <div className="my-6">
        <label id="starter" className="flex flex-wrap justify-center items-center w-full text-3xl mt-3xl">
          Dessert:
        </label>

      </div>
      <p className="pb-2 font-thin text-white font-serif max-w-sm">There will be a desserts medley to chose from on the day 🍮🍨</p>
      <div className="headings flex mx-auto flex-col text-center max-w-sm">
        <p className="pb-2 font-thin max-w-sm"><i>Each wedding guest will need to complete this <span className="font-semibold">sepearatly</span>.</i></p>
        <p className="pb-2 font-thin"><i>Please ensure you enter dietary needs or allergies or we will be unable to cater for you.</i></p>
        <p className="pb-2 font-thin text-xl">If you have any dietary requirements&nbsp;
          <a onClick={handleDietry} className="underline cursor-pointer">click here</a>.</p>
        {showingDietry && <Dietry />}
        <p>🤍</p>
      </div>
    </>
  )
}
const StarterDropdown = () => {
  return (
    <div className="form-group flex-col w-full felx mx-auto justify-center">
      <label id="starter" className="flex flex-wrap justify-center items-center w-full text-3xl">
        Starter:
      </label>
        <p className="mt-10  font-thin text-white font-serif  max-w-xl flex justify-center text-center mx-auto text-xl">Mediterranean Sharing Board </p>
    </div>
  )
}
const MainDropdown = () => {
  return (
    <div className="form-group w-full">
      <label id="starter" className="flex flex-col flex-wrap justify-center items-center w-full">
        <RadioButtonGroup />
      </label >
    </div>
  )
}
const Dietry = () => {
  return (
    <div className="form-group flex-col flex text-center mx-auto justify-center">
      <label >Dietary Requirements:</label>
      <textarea  name="dietry" placeholder="Vegan, Soy Intollerant..." id="diet" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-lg rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-full m-0 mt-5" />
    </div>
  )
}

const Drink = () => {
// Prosecco
// Pink Prosecco
// Gin and tonic
// Peroni
// Mulled wine
  return (
  <div className="form-group w-full">
      <label id="starter" className="flex flex-wrap justify-center items-center w-full">
        Drink:
        <select name="drink" defaultValue="" id="drink" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2">
          <option value="" disabled hidden>Please Select</option>
          <option value="Prosecco">Prosecco</option>
          <option value="Pink Prosecco">Pink Prosecco</option>
          <option value="Gin and tonic">Gin and tonic</option>
          <option value="Peroni">Peroni</option>
          <option value="Mulled wine">Mulled wine</option>
          <option value="Elderflower">Elderflower Presse (Non-Alcoholic)</option>
          <option value="Orange Juice">Orange Juice (Non-Alcoholic)</option>

        </select>
      </label>
    </div>
  )
}

export default RSVP;