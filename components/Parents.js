import Header from "./Header"
import Head from "next/head"
import Footer from "./Footer"
export default function Parents(props) {
    return (
        <>
            <Head>
                <title>Creativity overflow</title>
            </Head>
            <Header />

            {props.children}
            <Footer />

        </>
    )
}