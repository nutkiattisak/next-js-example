import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Index() {
    return (
        <div>
            <Head>
                <title>หน้าแรก</title>
            </Head>
            <Navbar />
        </div>
    );
}