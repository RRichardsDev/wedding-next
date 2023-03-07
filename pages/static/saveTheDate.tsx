import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import '../../styles/style.css'

const Home: NextPage = () => {
  return (
    <>
    <div className="headings flex mx-auto flex-col text-center">
    <p className="h1">THOMAS CHAPMAN</p>
    <p className="h1">AND </p>
    <p className="h1">CHARLOTTE RICHARDS</p>
    <h2>🤍</h2>

    <p className="h3 bigger-text">7th December 2024</p>
  </div>
  <div className="hero"></div>

  <div className="container mx-auto description">
    <p className="bigger-text">SAVE THE DATE!</p>
    <p>He asked the question & she of course said yes! They have set their wedding date and would love you to be their
      guest.</p>
    <p>We are very sorry, but we are unable to extend the invitation to children. We hope you understand and can still
      join us on our special day.</p>
      <p><em><b>This is not an RSVP we just want to get an idea.</b></em></p>
    <p><em>Full Invitation to follow.</em></p>
    <h2>🤍</h2>
  </div>

  <div className="conatiner p-4 mx-auto">
    <form id= "rsvp-form" action="./sendEmail.php" method="post">
      <div className="flex flex-col justify-center text-center">
        <div className="form-group">
          <label >Name:</label>
          <input name="name" type="name" className="dotted-input" id="name" placeholder="Tom Riddle"/>
        </div>
        <div className="form-group">
          <label >Email address:</label>
          <input name="email" type="email" className="dotted-input" id="email" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label>Allergies:</label>
          <input name="alergies" type="text" className="dotted-input" id="alergies" placeholder="Peanuts ..."/>
        </div>
        <div className="form-group">
          <label >Dietary Requirements:</label>
          <input name="diet" type="text" className="dotted-input" id="diet" placeholder="Vegan ..."/>
        </div>
        <div className="form-group justify-center">
          <label id="drink" className="block">Arrival Drink: </label>

          <select name="drink" id="drink-select" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-teal-900 dark:bg-emerald-800 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2 ">
            <option value=""  disabled defaultChecked hidden>Please Select</option>
            
            <option value="Prosecco">Prosecco</option>
            <option value="Peroni">Peroni</option>
            <option value="Non-Alcoholic">Non-Alcoholic</option>
          </select>
          
        </div>
        <div className="form-group">

        </div>
        <div className="flex justify-center text-center">

          <a className="submit-button" id="submit" type="submit">Confirm</a>
        </div>
      </div>
    </form>
  </div>
  <div className="container mx-auto description">
    <p className="bigger-text">Hope to see you there!</p>
    <p>🤍</p>
  </div>
  </>
  )
}

export default Home
