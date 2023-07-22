import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <div className="flex justify-center content-center bg-gray-100 min-h-screen">
      <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
