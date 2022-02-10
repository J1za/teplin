import LayoutForm from "components/LayoutForm";
import ContactForm from "../../components/common/ContactForm";

import Head from "next/head";

export default function CareerForm() {
    return (
        <LayoutForm
            title='Front-end developer (remote)'
            excerpt="We are always looking for talented Artists, Programmers, Designers and other team members. Feel free to send us your CV and portfolio – we will be happy to look over it. Who knows, maybe we need someone just like you in our team?"
        >
            <Head>
                <title>Career form • agency</title>
            </Head>
            <ContactForm careerForm />
        </LayoutForm >
    )
}