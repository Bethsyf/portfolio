import Head from "next/head";

import { Navbar, Footer } from "@/components/layout";
import {
  HeroView,
  ProjectsView,
  TechnologiesView,
  ExperienceView,
  BlogPreview,
  ContactView,
} from "@/components/views";

import styles from "@/styles/pages/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bethsy Falcon | Frontend Developer</title>
        <meta
          name="description"
          content="Frontend Developer especializada en React, Next.js y TypeScript. Creo interfaces modernas, escalables y centradas en el usuario."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Bethsy Falcon | Frontend Developer" />
        <meta
          property="og:description"
          content="Portfolio de Bethsy Falcon. Proyectos, experiencia y blog sobre desarrollo frontend."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmaviub4l/image/upload/v1698325626/djdpyrig9bo8e43ftbsp.png"
        />
        <meta property="og:url" content="https://portfolio-bfb.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="home">
        <Navbar />
        <HeroView />
        <TechnologiesView />
        <ProjectsView />
        <ExperienceView />
        <BlogPreview />
        <ContactView />
        <Footer />
      </main>
    </>
  );
}
