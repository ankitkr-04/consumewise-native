/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open-Sans", "sans-serif"],
        sansBold: ["Open-Sans-Bold", "sans-serif"],
        sansItalic: ["Open-Sans-Italic", "sans-serif"],
        sansSemibold: ["Open-Sans-SemiBold", "sans-serif"],
        sansLight: ["Open-Sans-Light", "sans-serif"],
        sansExtrabold: ["Open-Sans-ExtraBold", "sans-serif"],
        sansBItalic: ["Open-Sans-BoldItalic", "sans-serif"],
        jet: ["JetBrains-Mono", "monospace"],
        jetBold: ["JetBrains-Mono-Bold", "monospace"],
        jetItalic: ["JetBrains-Mono-Italic", "monospace"],
        jetSemibold: ["JetBrains-Mono-SemiBold", "monospace"],
        jetThin: ["JetBrains-Mono-Thin", "monospace"],
        montserrat: ["Montserrat-Alternates-Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
