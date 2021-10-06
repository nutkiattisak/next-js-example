import Head from "next/head";
import Link from "next/link";
import ContentTemplate from "../components/layouts/ContentTempalte";
import Navbar from "../components/Navbar";

export default function Index() {
    return (
        <ContentTemplate>
            <Head>
                <title>หน้าแรก</title>
            </Head>
            <Navbar />
        </ContentTemplate>
    );
}