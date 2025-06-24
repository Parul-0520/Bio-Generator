import React from "react";

export default function InputPanel({
  mood,
  setMood,
  keywords,
  setKeywords,
  vibe,
  setVibe,
  onGenerate,
  onReset,
}) {
  return (
    <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-md w-full">
      <h3 className="text-[#229e64] text-3xl font-bold text-center mb-2 bg-[#d8ffe1] px-5 py-2 rounded-xl shadow-md">
        Enter The Details
      </h3>

      <div className="text-center text-xl text-rose-400 mb-4">
        🎀 ❤️ 💌 🌹
      </div>

      <input
        type="text"
        value={mood}
         onChange={(e) => {
    const input = e.target.value;
    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(input)) {
      setMood(input);
    }
  }}
        placeholder="Mention the mood of your post. (e.g. Happy, Dreamy)"
        className="w-full p-3 rounded-lg border border-pink-300 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Mention the text/nos. to appear in bio image. ( , separated)"
        className="w-full p-3 rounded-lg border border-pink-300 mb-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      <input
        type="text"
        value={vibe}
          onChange={(e) => {
    const input = e.target.value;
    // Allow only letters and spaces
    if (/^[a-zA-Z\s]*$/.test(input)) {
      setVibe(input);
    }
  }}
        placeholder="Mention the vibe of your post. (e.g. Cozy, Fairycore)"
        className="w-full p-3 rounded-lg border border-pink-300 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />

      <div className="flex gap-3">
        <button
          onClick={onGenerate}
          className="bg-[#009966] hover:bg-[#007f55] text-white font-semibold px-5 py-2 rounded-lg border border-green-700 shadow-md hover:scale-105 transition w-full"
        >
          Generate My Bio ✨
        </button>

        <button
          onClick={onReset}
          className="bg-[#009966] hover:bg-[#007f55] text-white font-semibold px-6 py-2 rounded-lg border border-green-700 shadow-md hover:scale-105 transition"
        >
          Reset 🔄
        </button>
      </div>
    </div>
  );
}


