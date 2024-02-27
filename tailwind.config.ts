import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "search": "rgba(47, 50, 65, 0.5)",
        'gtxBack': '#1e1f25',
        'gtxText': '#5d6588',
        'gtxTextLight': '#a5adcf',
        'gtxGreen': '#11CABE',
        'gtxRed': '#FA2256',
        'gtxBackLight': '#34384C',
      },
      height: {
        'top': "70px",
        'main': "calc(100vh - 70px)",
        '67': "267px",
        '110': "430px",
        '45': "178px",
      },
      width: {
        '128': "430px",
      },
    },
  },
  plugins: [],
}
export default config

