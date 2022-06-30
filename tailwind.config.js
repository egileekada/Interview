/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {}, 
    fontFamily: {
      'Mulish-ExtraBold': [
        'Mulish-ExtraBold',
      ],
      'Mulish-Bold': [
        'Mulish-Bold',
      ],
      'Mulish-Medium': [
        'Mulish-Medium'
      ],
      'Mulish-Regular': [
        'Mulish-Regular'
      ],
      'Mulish-SemiBold': [
        'Mulish-SemiBold'
      ]
    }
  },
  plugins: [],
};
