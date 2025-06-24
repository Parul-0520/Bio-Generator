import React, { forwardRef } from "react";
import { FaRegCopy } from "react-icons/fa";

const BioCard = forwardRef(({ bio, copied, onCopy, onDownload }, ref) => {
  return (
    <div className="mt-8 text-center">
      <div
  ref={ref}
  style={{
    background: "linear-gradient(135deg, #ffeaff, #e0fff9)", // pastel gradient
    border: "3px solid #ffb3c6", // light pink border
    borderRadius: "2rem",
    padding: "2.2rem",
    maxWidth: "400px",
    margin: "0 auto",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.1)",
    color: "#5f4b8b", // soft purple text
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    lineHeight: "1.8",
    position: "relative",
    overflow: "hidden",
  }}
>
        <p className="whitespace-pre-line text-pink-700 text-lg font-medium tracking-wide">
          {bio}
        </p>
      </div>

      <div className="mt-4 flex gap-4 justify-center">
        <button
          onClick={onCopy}
          className="bg-white border border-pink-300 px-4 py-1 rounded-full hover:bg-pink-100 text-sm"
        >
          <FaRegCopy className="inline mr-1" /> {copied ? "Copied!" : "Copy Bio"}
        </button>
        <button
          onClick={onDownload}
          className="bg-white border border-pink-300 px-4 py-1 rounded-full hover:bg-pink-100 text-sm"
        >
          Save The Image 📝
        </button>
      </div>
    </div>
  );
});

export default BioCard;

