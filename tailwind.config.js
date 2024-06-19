/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            vert: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                  return `rgba(var(--vert), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                  return `rgba(var(--vert), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--vert))`;
            },

            jaune: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
                return `rgba(var(--jaune), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
                return `rgba(var(--jaune), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--jaune))`;
            },
        }
    },
  },
  plugins: [],
}

