import Layout from "components/Layout";
import Head from 'next/head';
import BlogTemplate from "templates/Blog";

export default function Blog() {
    return (
        <Layout grey>
             <Head>
                <title>Blog • agency</title>
            </Head>
            <BlogTemplate />
        </Layout>
    )
}