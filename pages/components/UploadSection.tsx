import React, { FC } from 'react';
import { UploadButton, UploadDropzone } from "../../uploadthing/core";
import type { SessionObject } from "../uploadImage";

type UploadSectionProps = {
  name?: string,
  prefix?: string
  setNumberCompleted: React.Dispatch<React.SetStateAction<number>>
}


const UploadSection: FC<UploadSectionProps> = ({ name, prefix, setNumberCompleted }) => {
  const [disabled, setDisabled] = React.useState(false);
  React.useEffect(() => {
    let sessionObject: SessionObject = JSON.parse(localStorage.getItem('sessionData') || '{}');
    console.log("sessionObject: ", sessionObject);
    if (sessionObject.photosTaken === undefined) return;
    sessionObject.photosTaken.forEach((photo) => {
      if (photo.name === name) {
        setDisabled(true);
      }
    })

  }, [])
  return (
    <div className="flex flex-col items-center">
      <h2 className={`text-2xl font-bold text-white mb-2 ${disabled ? "text-decoration-line: line-through" : ""}`}>{name}</h2>
      {disabled ? (
        <p></p>
      ) : (
        <UploadButton
          endpoint="imageUploader"
          className='ut-button:bg-green-900'
          onBeforeUploadBegin={(files) => {
            let renamed: File[] = [];

            files.forEach((file, i) => {
              renamed.push(new File([file], `${prefix}-${new Date().getTime()}-${(Math.random() * 1000000).toFixed(0)}-${file.name}`))
              let sessionObject: SessionObject = JSON.parse(localStorage.getItem('sessionData') || '{}');
              if (sessionObject.photosTaken === undefined) {
                sessionObject = {
                  id: new Date().getTime() + '-' + Math.random().toString(36).substring(7),
                  name: '',
                  email: '',
                  photosTaken: []
                }
              }
              sessionObject.photosTaken.push({ name: name ?? '', prefixedName: `${prefix}-${file.name}`, url: '' });

              localStorage.setItem('sessionData', JSON.stringify(sessionObject));
            })
            return renamed;
          }}
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            let sessionObject: SessionObject = JSON.parse(localStorage.getItem('sessionData') || '{}');
            console.log("sessionObject: ", sessionObject);
            if (sessionObject.photosTaken === undefined) return;
            sessionObject.photosTaken.forEach((photo) => {
              if (photo.name === name) {
                photo.url = res[0].url;
              }
            })
            setDisabled(true);
            setNumberCompleted((prevState) => prevState + 1);
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </div>
  )
}
export default UploadSection;
