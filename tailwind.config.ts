import type { Config } from "tailwindcss";

const config: Config = {
      content: [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
            colors: {
                  // Light Theme Colors
                  light: {
                        primary: "#FFFFFF", // White
                        secondary: "#F0F0F0", // Light Gray
                        accent: "#007BFF", // Azure Blue
                        background: "#FAFAFA", // Snow White
                        text: "#212121", // Charcoal
                        success: "#4CAF50", // Medium Sea Green
                        warning: "#FFC107", // Saffron
                        error: "#F44336", // Crimson
                  },
                  // Dark Theme Colors
                  dark: {
                        primary: "#1E1E2E", // Dark Slate Blue
                        secondary: "#2E2E38", // Charcoal
                        accent: "#FF6E6E", // Coral Red
                        background: "#121212", // Jet Black
                        text: "#E0E0E0", // Gainsboro
                        success: "#4CAF50", // Medium Sea Green
                        warning: "#FFC107", // Saffron
                        error: "#F44336", // Crimson
                  },
            },
            extend: {
                  backgroundImage: {
                        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-conic":
                              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  },
            },
      },
      plugins: [],
      darkMode: "class",
};
export default config;
