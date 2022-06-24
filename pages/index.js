import Layout from "@/components/layout";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";

import { chosenTheme } from "@/styles/theme";
import Greeting from "@/components/greeting";
import Skills from "@/components/skills/Skills";

export default function Index() {
  return (
    <>
      <Head>
        <title>{CMS_NAME} with Next.js</title>
      </Head>
      <Layout chosenTheme={chosenTheme}>
        <Greeting theme={chosenTheme} />
        <Skills theme={chosenTheme} />
      </Layout>
    </>
  );
}
