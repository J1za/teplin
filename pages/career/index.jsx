import Layout from "components/Layout";

import Head from 'next/head';

import CareerTemplate from "templates/Career";

export default function Contact() {

    return (
        <Layout grey>
            <Head>
                <title>Career • agency</title>
            </Head>
            <CareerTemplate />
        </Layout >
    )
}