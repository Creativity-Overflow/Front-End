import dynamic from "next/dynamic";
import "@/styles/globals.css";
import { AuthProvider } from "@/contexts/auth";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Creativity overflow</title>
        <link rel="preconnect" href="https://fonts.googleapis.com/" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&display=swap" rel="stylesheet" />
      </Head>
      <body className="flex flex-col justify-between">
        <AuthProvider>
          <Header />
            <main>
              <Component {...pageProps} />
            </main>
          <Footer />
        </AuthProvider>
      </body>
    </>
  );
}
export default dynamic(() => Promise.resolve(App), { ssr: false });