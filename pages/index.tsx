import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  // fetch ('http://localhost:3000/api/controllers/sendEmail', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }})
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="headings flex mx-auto flex-col text-center">
        <p className="h1">THOMAS CHAPMAN</p>
        <p className="h1">AND </p>
        <p className="h1">CHARLOTTE RICHARDS</p>
        <h2>🤍</h2>
        <div className="w-screen">

        <img className='w-10/12 m-auto' src="/tl.png" alt="tom proposing to lottie" />
        </div>

        <p className="h3 bigger-text">7th December 2024</p>
      </div>
    </div>
  )
}

export default Home
