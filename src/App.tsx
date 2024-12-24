// import { useState } from 'react'
import "./App.css";
import CoverForm from "./components/coverForm";
import Gallery from "./components/gallery";
import Preview from "./components/preview";
import { useSelector } from "react-redux";
import { useRef } from "react";

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { showGallery, showPreview } = useSelector((state: any) => state.app);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-screen h-screen flex">
      <CoverForm contentRef={contentRef} />
      {showGallery && <Gallery />}
      {showPreview && <Preview contentRef={contentRef} />}
    </div>
  );
}

export default App;
