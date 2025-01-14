import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          50: "#F1F0FB",
          100: "#E2DDF8",
          200: "#C5BBF2",
          300: "#A899EC",
          400: "#9b87f5",
          500: "#7E69AB",
          600: "#6A5591",
          700: "#564177",
          800: "#422D5D",
          900: "#2E1943",
        },
        secondary: {
          DEFAULT: "#7E69AB",
          50: "#F5F3F9",
          100: "#EBE7F3",
          200: "#D7CFE7",
          300: "#C3B7DB",
          400: "#AF9FCF",
          500: "#7E69AB",
          600: "#6A5591",
          700: "#564177",
          800: "#422D5D",
          900: "#2E1943",
        },
        accent: {
          DEFAULT: "#403E43",
          foreground: "#F1F0FB",
        },
        destructive: {
          DEFAULT: "#ea384c",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#F1F0FB",
          foreground: "#403E43",
        },
        success: {
          DEFAULT: "#4CAF50",
          foreground: "#FFFFFF",
        },
        warning: {
          DEFAULT: "#FF9800",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'flutter': '0 2px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)',
        'flutter-lg': '0 4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
        'flutter-xl': '0 8px 12px rgba(0,0,0,0.1), 0 16px 24px rgba(0,0,0,0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "scale-in": "scale-in 0.2s ease-out",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #9b87f5 0%, #7E69AB 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #7E69AB 0%, #403E43 100%)',
        'gradient-accent': 'linear-gradient(135deg, #403E43 0%, #2E1943 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;