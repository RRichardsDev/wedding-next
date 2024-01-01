import { NextPage } from "next/types";
import { UploadButton, UploadDropzone } from "../uploadthing/core";
import UploadSection from "./components/UploadSection";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import { useRouter } from 'next/router';
import RedirectModal from "./components/RedirectModal";


export type SessionObject = {
  id: string,
  name: string,
  email: string,
  photosTaken: {
    name: string,
    prefixedName: string,
    url: string
  }[]
}


const UploadImage: NextPage = () => {
  const [numberCompleted, setNumberCompleted] = useState(0);
  const [redirectModalOpen, setRedirectModalOpen] = useState(false);
  const router = useRouter();

  // Redirect
  const handleRedirect = () => {
    setTimeout(() => {
      router.push('/gallery');
    }, 2000);
  };

  useEffect(() => {
    let sessionObject: SessionObject = JSON.parse(localStorage.getItem('sessionData') || '{}');
    console.log("sessionObject: ", sessionObject);
    let numberCompleted = 0;
    if (sessionObject.photosTaken === undefined) return;
    sessionObject.photosTaken.forEach((photo) => {
      numberCompleted++;
    })
    setNumberCompleted(numberCompleted);
  }, [])
  function logInToFacebookAndPost() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.tomandlottie.com%2F&amp;src=sdkpreparse')
  }
  function logInToInstagramAndPost() {
    window.open('https://www.instagram.com/accounts/login/?next=/tomandlottie2024/')
  }
  function logInToTwitterAndPost() {
    // const hashtags = encodeURIComponent("tomandlottie2024");
    // const sessionObject: SessionObject = JSON.parse(localStorage.getItem('sessionData') || '{}');
    // if (sessionObject.photosTaken === undefined) return;
    // // const photoUrl1 = encodeURIComponent(sessionObject.photosTaken[0].url);
    // const photoUrl1 = encodeURIComponent('https://utfs.io/f/a1b0bc05-2b11-434b-895a-01e1d40edffd-4bghta.33.34.jpeg');
    // const text = encodeURIComponent(`My shared photos from Tom and Lottie's wedding! ${photoUrl1}`);

    // var tweetUrl = `https://twitter.com/intent/tweet?text=${text}&url=${photoUrl1}&hashtags=${hashtags}`;

    // window.open(tweetUrl);
    // redirect('/gallery');
    handleRedirect();


  }

  useEffect(() => {
    if (numberCompleted === 4) {
      // TODO: change to custom modal
      setRedirectModalOpen(true);
      // TODO: option to log in to facebook, instagram or twitter and post them
      // logInToFacebookAndPost();
      // logInToInstagramAndPost();
      logInToTwitterAndPost();
    }
  }, [numberCompleted])


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-arround p-24">
        <h1 className="text-3xl font-bold text-white mb-2">Upload Images</h1>
        <p className="text-white mb-2">{numberCompleted} / 4</p>
        <UploadSection name='Green Flowers' prefix='green-flowers' setNumberCompleted={setNumberCompleted} />
        <UploadSection name='Laughing People' prefix='laughing-people' setNumberCompleted={setNumberCompleted} />
        <UploadSection name='Tom and Lottie' prefix='tom-and-lottie' setNumberCompleted={setNumberCompleted} />
        <UploadSection name='Main Course' prefix='main-course' setNumberCompleted={setNumberCompleted} />
      </main>
      <RedirectModal isOpen={redirectModalOpen} redirect={handleRedirect} />
    </>
  )
}
export default UploadImage