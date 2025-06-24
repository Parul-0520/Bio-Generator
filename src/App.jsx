import { useState, useRef } from "react";
import InputPanel from "./input";
import BioCard from "./bioCard";
import { generateBioText } from "./genbio";
import html2canvas from "html2canvas";
import "./index.css";

function App() {
  const [mood, setMood] = useState("");
  const [keywords, setKeywords] = useState("");
  const [vibe, setVibe] = useState("");
  const [bio, setBio] = useState("");
  const [copied, setCopied] = useState(false);
  const cardRef = useRef(null);

const [warning, setWarning] = useState("");

  const handleGenerate = () => {
  if (!mood.trim() || !keywords.trim() || !vibe.trim()) {
    setWarning("Please fill in all the details before generating your bio.");
    return;
  }

  const newBio = generateBioText(mood, keywords, vibe);
  setBio(newBio);
  setCopied(false);
  setWarning(""); // clear warning
};

const handleReset = () => {
  setMood("");
  setKeywords("");
  setVibe("");
  setBio("");
  setCopied(false);
  setWarning(""); // clear warning on reset
};

  const copyBio = () => {
    navigator.clipboard.writeText(bio);
    setCopied(true);
  };

 const exportAsImage = () => {
  if (!cardRef.current) {
    console.error("Ref is null!");
    return;
  }
  
console.log("Attempting to export image", cardRef.current);

  // Delay to ensure rendering is complete
  setTimeout(() => {
    html2canvas(cardRef.current, {
  backgroundColor: "#ffffff", // important
  scale: 2,
  useCORS: true,
  logging: true,
}).then((canvas) => {
  const link = document.createElement("a");
  link.download = "aesthetic-bio.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}).catch((err) => {
  console.error("html2canvas error", err);
});


  }, 100); // 100ms delay
};



  // 👇👇 THIS IS WHERE RETURN STARTS 👇👇
  return (
    <div className="relative min-h-screen p-6 flex flex-col items-center font-[Poppins] overflow-hidden">
      {/* <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/cam.png" alt="cam" className="absolute top-10 left-8 w-20 opacity-20" />
        <img src="/van.png" alt="van" className="absolute bottom-16 left-10 w-24 opacity-20" />
        <img src="/quo.png" alt="quote" className="absolute top-20 right-8 w-16 opacity-20" />
        <img src="/movie.png" alt="movie" className="absolute bottom-20 right-12 w-20 opacity-20" />
      </div> */}

      <h1 className="text-4xl font-bold text-[#de4848] mb-6 bg-[#ffe2d4] px-4 py-2 rounded-xl inline-block drop-shadow">
        🛋️ Instagram Bio Generator 🧘
      </h1>

     <InputPanel
  mood={mood}
  setMood={setMood}
  keywords={keywords}
  setKeywords={setKeywords}
  vibe={vibe}
  setVibe={setVibe}
  onGenerate={handleGenerate}
  onReset={handleReset}
/>

{warning && (
  <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md max-w-md w-full mt-4">
    <p className="font-semibold">⚠️ {warning}</p>
  </div>
)}


      {bio && (
        <BioCard
          ref={cardRef}
          bio={bio}
          copied={copied}
          onCopy={copyBio}
          onDownload={exportAsImage}
        />
      )}
    </div>
  );
}

// ✅ END of Function App
export default App;

