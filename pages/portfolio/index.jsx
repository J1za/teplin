import styles from "./style.module.scss";

import Layout from "components/Layout";

import PortfolioTemplate from "templates/Portfolio";
import SectionCTA from "components/sections/SectionCTA";

export default function Porfolio() {
    return (
        <Layout>
            <PortfolioTemplate />
            <SectionCTA pageTop />
        </Layout>
    )
}