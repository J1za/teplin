import LayoutForm from "components/LayoutForm";

import Head from 'next/head'

import ContactForm from "../../components/common/ContactForm";
import ContactCard from "./ContactCard";

export default function Contact() {

    return (
        <LayoutForm
            title={[<span>Hi! </span>, 'Let’s make great work together. 🤘']}
            excerpt="Looking for a team to bring your idea to life? Maybe just willing to work with us on one of our own projects? No matter the reason, we are always happy to help. Let's get in touch!"
        >
            <Head>
                <title>Contact • agency</title>
            </Head>
            <ContactForm />
            <ContactCard />
        </LayoutForm >
    )
}