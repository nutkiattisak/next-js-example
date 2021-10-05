import Head from "next/head";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Navbar />
            <h1>About</h1>
        </div>
    );
}