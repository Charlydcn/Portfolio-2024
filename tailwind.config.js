/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            bleu: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                  return `rgba(var(--bleu), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                  return `rgba(var(--bleu), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--bleu))`;
            },

            blanc: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                    return `rgba(var(--blanc), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                    return `rgba(var(--blanc), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--blanc))`;
            },

            noir: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                    return `rgba(var(--noir), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                    return `rgba(var(--noir), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--noir))`;
            },

            vert: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                    return `rgba(var(--vert), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                    return `rgba(var(--vert), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--vert))`;
            },

            linkedin: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                  return `rgba(var(--linkedin), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                  return `rgba(var(--linkedin), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--linkedin))`;
            },

            orange: ({ opacityVariable, opacityValue }) => {
                if (opacityValue !== undefined) {
                  return `rgba(var(--orange), ${opacityValue})`;
                }
                if (opacityVariable !== undefined) {
                  return `rgba(var(--orange), var(${opacityVariable}, 1))`;
                }
                return `rgb(var(--orange))`;
            },
        }
    },
    transitionDuration: {
        DEFAULT: '250ms',
        75: '75ms',
        100: '100ms',
        150: '150ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
    }
  },
  plugins: [],
}

