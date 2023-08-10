import '@/styles/globals.css'
import { AuthProvider } from '@/contexts/auth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }) {
  return <AuthProvider>
    <div className="flex flex-col justify-between">
      <Header />
      <div className='h-screen'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

  </AuthProvider>
}
