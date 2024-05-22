"use client";
import NoFile from "@/components/NoFile";
import { useState } from "react";
import Header from "./Header";
import ComplexTable from "@/components/ComplexTable/ComplexTable";

import mercado from "../assets/mercado.json";
import products from "../assets/products.json";
import FileInputComponent from "./FileInputComponent";

export default function Home() {
  const [jsonFile, setJsonFile] = useState<any>(null);
  const [title, setTitle] = useState("");

  const handleUploadJson = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = (file: File) => {
    if (file) {
      setTitle(file.name);

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

  console.log(jsonFile);
  return (
    <div className="bg-neutral-100 min-h-screen grid grid-rows-[50px_1fr]">
      <Header />
      <main className="p-4 h-full flex flex-col gap-2">
        {jsonFile ? (
          <>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{title}</span>
              {/* <input type="file" accept=".json" onChange={handleUploadJson} /> */}
              <FileInputComponent
                className="ml-auto font-semibold py-1 px-2 bg-neutral-600 rounded-md text-neutral-50"
                onSelectFile={handleFileUpload}
                text={"Update JSON here"}
              />
            </div>
            <ComplexTable data={jsonFile} />
          </>
        ) : (
          <NoFile onFileChange={handleFileUpload} />
        )}
        {/* <ComplexTable data={products} /> */}
      </main>
    </div>
  );
}
