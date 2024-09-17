/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        seaGreen: {
          DEFAULT: "#2c7d58",
          light: "rgba(44, 125, 88, 0.2)",
          dark: "rgba(44, 125, 88, 0.8)",
        },
        bostonBlue: {
          DEFAULT: "#3d8fc2",
          light: "rgba(61, 143, 194, 0.2)",
          dark: "rgba(61, 143, 194, 0.8)",
        },
        zest: {
          DEFAULT: "#e56b2e",
          light: "rgba(229, 107, 46, 0.2)",
          dark: "rgba(229, 107, 46, 0.8)",
        },
        bayLeaf: {
          DEFAULT: "#79a98d",
          light: "rgba(121, 169, 141, 0.2)",
          dark: "rgba(121, 169, 141, 0.8)",
        },
        fuelYellow: {
          DEFAULT: "#f3a339",
          light: "rgba(243, 163, 57, 0.2)",
          dark: "rgba(243, 163, 57, 0.8)",
        },
      },
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
      boxShadow: {
        "custom-lg": "0 10px 20px rgba(44, 125, 88, 0.3)",
        "custom-md": "0 6px 12px rgba(61, 143, 194, 0.3)",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
