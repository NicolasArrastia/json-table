import React, { useRef } from "react";

type Props = {
  onSelectFile: (file: File) => void;
  text: string;
  className?: string;
};

const FileInputComponent = ({ onSelectFile, text, className }: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      console.log(files[0].name);
      // Optionally, update some state to display the file name
      onSelectFile(files[0]);
    }
  };

  return (
    <>
      <span onClick={handleClick} className={`cursor-pointer ${className}`}>
        {text}
      </span>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </>
  );
};

export default FileInputComponent;
