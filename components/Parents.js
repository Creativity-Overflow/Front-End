import Header from "./Header"
import Head from "next/head"

export default function Parents(props) {
    return (
        <>
            <Head>
                <title>Creativity overflow</title>
            </Head>
            <Header />

            {props.children}


        </>
    )
}