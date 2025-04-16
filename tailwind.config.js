/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'min-h-screen',
    'bg-gradient-to-br',
    'from-blue-500',
    'to-purple-600',
    'flex',
    'items-center',
    'justify-center',
    'bg-white',
    'p-8',
    'rounded-lg',
    'shadow-xl',
    'max-w-md',
    'w-full',
    'text-3xl',
    'font-bold',
    'text-center',
    'text-gray-800',
    'mb-4',
    'text-gray-600',
    'mb-6',
    'bg-blue-500',
    'hover:bg-blue-600',
    'text-white',
    'font-semibold',
    'py-2',
    'px-4',
    'rounded',
    'transition',
    'duration-300'
  ]
}
