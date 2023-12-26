import React, { FC } from 'react';
import { UploadButton, UploadDropzone } from "../uploadthing/core";

type UploadSectionProps = {
  name?: string,
  prefix?: string
}

const UploadSection: FC<UploadSectionProps> = ({ name, prefix }) => {
  const [disabled, setDisabled] = React.useState(false);
  return (
    <div className="flex flex-col items-center">
      <h1 className={`text-4xl font-bold text-white mb-2 ${disabled ? "text-decoration-line: line-through" : ""}`}>{name}</h1>
      {disabled ? (
        <p></p>
      ) : (
        <UploadButton
          endpoint="imageUploader"
          className='ut-button:bg-green-900'
          onBeforeUploadBegin={(files) => {
            let renamed: File[] = [];
            console.log("files")
            console.log(files);
            files.forEach((file, i) => {
              renamed.push(new File([file], `${prefix}-${file.name}`))
            })
            return renamed;
          }}
          onClientUploadComplete={(res) => {
            console.log("Files: ", res);
            setDisabled(true);
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
