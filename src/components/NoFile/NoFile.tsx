import FileInputComponent from "@/app/FileInputComponent";
import { useState, DragEvent } from "react";

const NoFile = ({ onFileChange }: { onFileChange: (file: File) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      onFileChange(file);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div className="h-1/2 flex items-center justify-center">
      <div
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`rounded-md bg-neutral-200 py-8 px-8 text-center italic ${
          isHovered && "bg-orange-200"
        }`}
      >
        No json files here. You can drop it here or add one by clicking{" "}
        <FileInputComponent
          onSelectFile={onFileChange}
          text="here"
          className="font-semibold"
        />
      </div>
    </div>
  );
};

export default NoFile;
