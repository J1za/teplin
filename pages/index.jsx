import SectionHero from "components/sections/SectionHero";
import SectionAbout from "components/sections/SectionAbout";
import SectionServices from "components/sections/SectionServices";
import SectionAdvantages from "components/sections/SectionAdvantages";
import SectionValue from "components/sections/SectionValue";
import SectionTasks from "components/sections/SectionTasks";
import SectionThings from "components/sections/SectionThings";
import SectionCases from "components/sections/SectionCases";
import SectionReviews from "components/sections/SectionReviews";
import SectionTeam from "components/sections/SectionTeam";
import SectionCTA from "components/sections/SectionCTA";
import Layout from "../components/Layout";

import { useEffect } from "react";
import Renderer from "logic/renderer"
import Head from "next/head";

export default function Home({ data }) {

  useEffect(() => {
    Renderer.render()
  }, [])

  return (
    data && (
      <Layout>
        <Head>
          <title>agency • Web & Mobile Developement Agency</title>
        </Head>
        <SectionHero />
        <SectionAbout />
        <SectionServices />
        <SectionAdvantages />
        <SectionValue />
        <SectionTasks />
        <SectionThings />
        <SectionCases />
        <SectionReviews />
        <SectionTeam />
        <SectionCTA />
      </Layout>
    )
  );
}
export async function getServerSideProps({ req }) {
  const data = {};
  return {
    props: {
      data,
    },
  };
}
