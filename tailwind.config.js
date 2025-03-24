// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx}"], // Make sure this matches your project structure
    theme: {
      extend: {
        animation: {
          'text-glow': 'textGlow 4s ease-in-out infinite',
        },
        keyframes: {
          textGlow: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.6' },
          },
        },
      },
    },
    plugins: [],
  };
  