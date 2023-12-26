import { NextPage } from "next/types";
import { UploadButton, UploadDropzone } from "./uploadthing/core";
import UploadSection from "./components/UploadSection";

const UploadImage: NextPage = () => {

  return (
    <main className="flex min-h-screen flex-col items-center justify-arround p-24">
      <UploadSection name='Green Flowers' prefix='green-flowers' />
      <UploadSection name='Laughing People' prefix='laughing-people' />
      <UploadSection name='Tom and Lottie' prefix='tom-and-lottie' />
      <UploadSection name='Main Course' prefix='main-course' />
    </main>
  )
}
export default UploadImage