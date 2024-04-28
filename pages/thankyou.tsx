import { NextPage } from "next/types";
import HamburgerMenu from "./components/HamburgerMenu";

const ThankYou: NextPage = () => {

  return (
    <>
    <HamburgerMenu />

      <div className="h-screen">
        <div className="container description h-screen flex justify-center text-center flex-col mx-auto">
          <h1 className="h1 text-3xl ">THANK YOU! SEE YOU SOON!</h1>
          <p className="h3 bigger-text">7th December 2024</p>
          <h2 className="mt-4">🤍</h2>
        </div>
      </div>
    </>
  )
}
export default ThankYou