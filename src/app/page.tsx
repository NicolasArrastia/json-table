"use client";
import NoFile from "@/components/NoFile";
import SimpleTable from "@/components/SimpleTable";
import { useState, DragEvent } from "react";
import FileInputComponent from "./FileInputComponent";
import Header from "./Header";
import ComplexTable from "@/components/ComplexTable/ComplexTable";

export default function Home() {
  const [jsonFile, setJsonFile] = useState<any>(null);
  console.log("render");

  const handleUploadJson = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) handleFileUpload(file);
  };

  const handleFileUpload = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          setJsonFile(json);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen grid grid-rows-[50px_1fr]">
      <Header />
      <main className="p-8 h-full">
        <input type="file" accept=".json" onChange={handleUploadJson} />

        {jsonFile ? (
          <SimpleTable data={jsonFile} />
        ) : (
          <NoFile onFileChange={handleFileUpload} />
        )}
      </main>
    </div>
  );
}
