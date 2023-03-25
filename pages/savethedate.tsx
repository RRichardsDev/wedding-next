import { NextPage } from 'next'
import { redirect, useRouter} from 'next/navigation'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react';
// import '../../styles/style.css'

const Home: NextPage = () => {
  const [ formItems, setFormItems ] = useState({
    name: '',
    email: '',
    allergies: '',
    diet: '',
    drink: ''
  }); 
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // console.log('test')
    console.log(e.target.getAttribute('name'))
    const filedname = e.target.getAttribute('name');
    if (filedname === null) return;

    setFormItems({...formItems, [filedname]: e.target.value})

  }
  const router = useRouter();

  const sendResponse = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    console.log('sending response')
    const res  = await fetch ('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:  formItems.name,
        email: formItems.email,
        allergies: formItems.allergies,
        diet: formItems.diet,
        drink: formItems.drink
      })
    })
    console.log(res);
    router.push('/thankyou')
  }
  return (
    <>
    <div className="headings flex mx-auto flex-col text-center">
    <p className="h1">THOMAS CHAPMAN</p>
    <p className="h1">AND </p>
    <p className="h1">CHARLOTTE RICHARDS</p>
    <h2>🤍</h2>

    <p className="h3 bigger-text">7th December 2024</p>
  </div>

  <div className="hero">
    <Image src="/tl.png" alt="Picture of the tom proposing to lottie" width={1080} height={840} />
  </div>

  <div className="container mx-auto description">
    <p className="bigger-text">SAVE THE DATE!</p>
    <p>He asked the question & she of course said yes! They have set their wedding date and would love you to be their
      guest.</p>
    <p>We are very sorry, but we are unable to extend the invitation to children. We hope you understand and can still
      join us on our special day.</p>
      <p><em><b>This is not an RSVP we just want to get an idea of preference.</b></em></p>
    <p><em>Full Invitation to follow.</em></p>
    <h2>🤍</h2>
  </div>

  <div className="conatiner p-4 mx-auto">
    <form id= "rsvp-form" action="./sendEmail.php" method="post">
      <div className="flex flex-col justify-center text-center">
        <div className="form-group">
          <label >Name:</label>
          <input name="name" type="name" className="dotted-input" id="name" placeholder="Tom Riddle" onChange={ e => handleFieldChange(e)}/>
        </div>
        <div className="form-group">
          <label >Email address:</label>
          <input name="email" type="email" className="dotted-input" id="email" placeholder="name@example.com" onChange={ e => handleFieldChange(e)}/>
        </div>
        <div className="form-group">
          <label>Allergies:</label>
          <input name="allergies" type="text" className="dotted-input" id="allergies" placeholder="Peanuts ..." onChange={ e => handleFieldChange(e)}/>
        </div>
        <div className="form-group">
          <label >Dietary Requirements:</label>
          <input name="diet" type="text" className="dotted-input" id="diet" placeholder="Vegan ..." onChange={ e => handleFieldChange(e)}/>
        </div>
        <div className="form-group justify-center">
          <label id="drink" className="block">Arrival Drink: </label>

          <select name="drink" defaultValue="" id="drink-select" className="w-1/2 bg-green-50 border border-green-300 text-green-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 p-2.5 dark:bg-teal-900 dark:bg-emerald-800 dark:bg-emerald-800 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-4 mt-2 " onChange={ e => handleFieldChange(e)}>
            <option value=""  disabled hidden>Please Select</option>
            
            <option value="Prosecco">Prosecco</option>
            <option value="Peroni">Peroni</option>
            <option value="Non-Alcoholic">Non-Alcoholic</option>
          </select>
          
        </div>
        <div className="form-group">

        </div>
        <div className="flex justify-center text-center">

          <a className="submit-button" id="submit" onClick={ e => sendResponse(e) }>Confirm</a>
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
