import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import light from "./assets/Sky Switch - Light.png";
import dark from "./assets/Sky Switch - Dark.png";
import darkbtn from "./assets/Dark button.png";
import lightbtn from "./assets/Light button.png";

const LanguageTranslator = () => {
  const [isDark, setIsDark] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translateText = async () => {
    if (!inputText.trim()) {
      alert("Please enter text to translate.");
      return;
    }

    if (!selectedLanguage) {
      alert("Please select a language.");
      return;
    }

    try {
      const response = await fetch(
        `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${
          selectedLanguage.value
        }&dt=t&q=${encodeURIComponent(inputText)}`
      );
      const data = await response.json();
      const translation = data[0]?.[0]?.[0] || "Translation not available.";
      setTranslatedText(translation);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Error in translation. Please try again.");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    toast.success("Translation copied to clipboard!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: isDark ? "dark" : "light",
    });
  };

  const languages = [
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "de", label: "German" },
    { value: "ar", label: "Arabic" },
    { value: "hy", label: "Armenian" },
    { value: "az", label: "Azerbaijani" },
    { value: "eu", label: "Basque" },
    { value: "be", label: "Belarusian" },
    { value: "bn", label: "Bengali" },
    { value: "bs", label: "Bosnian" },
    { value: "bg", label: "Bulgarian" },
    { value: "ca", label: "Catalan" },
    { value: "ceb", label: "Cebuano" },
    { value: "ny", label: "Chichewa" },
    { value: "zh-CN", label: "Chinese (Simplified)" },
    { value: "zh-TW", label: "Chinese (Traditional)" },
    { value: "co", label: "Corsican" },
    { value: "hr", label: "Croatian" },
    { value: "cs", label: "Czech" },
    { value: "da", label: "Danish" },
    { value: "nl", label: "Dutch" },
    { value: "en", label: "English" },
    { value: "eo", label: "Esperanto" },
    { value: "et", label: "Estonian" },
    { value: "tl", label: "Filipino" },
    { value: "fi", label: "Finnish" },
    { value: "gl", label: "Galician" },
    { value: "ka", label: "Georgian" },
    { value: "el", label: "Greek" },
    { value: "gu", label: "Gujarati" },
    { value: "ht", label: "Haitian Creole" },
    { value: "ha", label: "Hausa" },
    { value: "haw", label: "Hawaiian" },
    { value: "he", label: "Hebrew" },
    { value: "hi", label: "Hindi" },
    { value: "hmn", label: "Hmong" },
    { value: "hu", label: "Hungarian" },
    { value: "is", label: "Icelandic" },
    { value: "ig", label: "Igbo" },
    { value: "id", label: "Indonesian" },
    { value: "ga", label: "Irish" },
    { value: "it", label: "Italian" },
    { value: "ja", label: "Japanese" },
    { value: "jw", label: "Javanese" },
    { value: "kn", label: "Kannada" },
    { value: "kk", label: "Kazakh" },
    { value: "km", label: "Khmer" },
    { value: "ko", label: "Korean" },
    { value: "ku", label: "Kurdish (Kurmanji)" },
    { value: "ky", label: "Kyrgyz" },
    { value: "lo", label: "Lao" },
    { value: "la", label: "Latin" },
    { value: "lv", label: "Latvian" },
    { value: "lt", label: "Lithuanian" },
    { value: "mk", label: "Macedonian" },
    { value: "ms", label: "Malay" },
    { value: "ml", label: "Malayalam" },
    { value: "mr", label: "Marathi" },
    { value: "mn", label: "Mongolian" },
    { value: "ne", label: "Nepali" },
    { value: "no", label: "Norwegian" },
    { value: "ps", label: "Pashto" },
    { value: "fa", label: "Persian (Farsi)" },
    { value: "pl", label: "Polish" },
    { value: "pt", label: "Portuguese" },
    { value: "pa", label: "Punjabi" },
    { value: "ro", label: "Romanian" },
    { value: "ru", label: "Russian" },
    { value: "sr", label: "Serbian" },
    { value: "st", label: "Sesotho" },
    { value: "si", label: "Sinhala" },
    { value: "sk", label: "Slovak" },
    { value: "sl", label: "Slovenian" },
    { value: "so", label: "Somali" },
    { value: "su", label: "Sundanese" },
    { value: "sw", label: "Swahili" },
    { value: "sv", label: "Swedish" },
    { value: "tg", label: "Tajik" },
    { value: "ta", label: "Tamil" },
    { value: "te", label: "Telugu" },
    { value: "th", label: "Thai" },
    { value: "tr", label: "Turkish" },
    { value: "uk", label: "Ukrainian" },
    { value: "ur", label: "Urdu" },
    { value: "uz", label: "Uzbek" },
    { value: "vi", label: "Vietnamese" },
    { value: "cy", label: "Welsh" },
    { value: "xh", label: "Xhosa" },
    { value: "yi", label: "Yiddish" },
    { value: "yo", label: "Yoruba" },
    { value: "zu", label: "Zulu" },
  ];

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-4 ${
        isDark ? "bg-black" : "bg-black"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-lg border border-gray-300 shadow-lg overflow-hidden ${
          isDark
            ? "bg-gradient-to-b from-[#6A1E55] via-[#3B1C32] to-[#005DE8]/70 backdrop-blur-2xl"
            : "bg-gradient-to-b from-gray-200 via-[#ead5f6] to-[#D1E9F6]"
        }`}
      >
        <div
          className={`flex justify-between items-center px-4 py-3 ${
            isDark ? "border-gray-700" : "border-b"
          }`}
        >
          <h1
            className={`text-lg font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Language translator
          </h1>
          <button className={isDark ? "text-white/80" : "text-slate-600"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m5 8 6 6" />
              <path d="m4 14 6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="m22 22-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <textarea
            placeholder="Enter text to translate"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className={`w-full h-32 p-3 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDark
                ? "bg-gray-800 text-white placeholder-gray-400 border-none"
                : "bg-white border text-black"
            }`}
          />
        </div>

        <div className="px-4 pb-2 relative">
          <p
            className={`text-sm mb-2 ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Translate to:
          </p>
          <div
            className={`relative p-2 rounded-lg cursor-pointer ${
              isDark ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
            onClick={() => setIsDropdownOpen((prev) => !prev)}
          >
            {selectedLanguage?.label || "Select a Language"}
            <span className="absolute right-2 top-2 text-gray-500">▼</span>
          </div>
          {isDropdownOpen && (
            <div
              className={`absolute mt-[1px] overflow-y-auto h-[300px] rounded-lg shadow-lg z-10 w-[93%] ${
                isDark ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              {languages.map((lang) => (
                <div
                  key={lang.value}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setIsDropdownOpen(false);
                  }}
                  className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                >
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-3">
          <button
            onClick={translateText}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
          >
            Translate
          </button>
        </div>

        <div className="relative p-4">
          <textarea
            readOnly
            value={translatedText}
            className={`w-full h-32 p-3 rounded-lg resize-none ${
              isDark
                ? "bg-gray-800 text-white border-none"
                : "bg-gray-50 border"
            }`}
            placeholder="Translation will appear here"
          />
          <img
            src={isDark ? darkbtn : lightbtn}
            alt="Copy to Clipboard"
            onClick={copyToClipboard}
            className="absolute top-24 right-8 w-6 h-6 cursor-pointer hover:opacity-80 transition-opacity"
            title="Copy to Clipboard"
          />
        </div>

        <div className="flex justify-center items-center gap-3 py-4">
          <span
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Light
          </span>
          <img
            src={isDark ? dark : light}
            alt="Theme Toggle"
            className="w-12 h-6 cursor-pointer"
            onClick={() => setIsDark(!isDark)}
          />
          <span
            className={`text-sm font-semibold ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            Dark
          </span>
        </div>

        <div className="text-center pb-4">
          <p
            className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            Powered and Developed By
          </p>
          <a
            href="#"
            className={`font-bold ${
              isDark ? "text-white" : "text-blue-600"
            } hover:underline`}
          >
            GenixBit Labs Pvt.Ltd.
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LanguageTranslator;
