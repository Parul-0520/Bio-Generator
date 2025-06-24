import { emojis, quotes } from "./emojiQuote";


export function generateBioText(mood, keywords, vibe) {
  const emojiSet = emojis[mood.toLowerCase()] || "✨";
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  const cleanKeywords = keywords
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean)
    .join(" · ");

  return `${emojiSet} ${cleanKeywords}\n${vibe} energy only\n"${quote}"`;
}
