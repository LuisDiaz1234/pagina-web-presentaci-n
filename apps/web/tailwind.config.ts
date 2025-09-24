import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E76FF",
        charcoal: "#111827",
        graytext: "#6B7280",
        accent: "#10B981",
        lightbg: "#F3F4F6",
        white: "#FFFFFF"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(14,118,255,0.25)"
      },
      backgroundImage: {
        "radial-1":
          "radial-gradient(1200px 600px at 10% -10%, rgba(14,118,255,.35), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(16,185,129,.35), transparent 60%)",
        "grid":
          "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "32px 32px"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%,100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
