import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Creativity overflow</title>
      </Head>
      <div className="flex flex-col justify-between">
        <Header />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
