import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#08070A",
        ink: "#111014",
        gold: "#D6A84F",
        neon: "#FF3FA4",
        violet: "#7C3AED",
        ivory: "#F8F7F2"
      },
      boxShadow: {
        glow: "0 0 32px rgba(255, 63, 164, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
