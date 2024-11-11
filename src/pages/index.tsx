import Head from 'next/head';

import styles from '@/styles/pages/Home.module.scss';
import NavbarView from '@/components/views/navbar/NavbarView';
import AboutMe from '@/components/views/aboutMe/AboutMe';
import Footer from '@/components/views/footer/Footer';
import ProjectsView from '@/components/views/projects/ProjectsView';
import TechnologiesView from '@/components/views/technologies/Technologies';
import ExperienceView from '@/components/views/experience/Experience';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Bethsy Falcon</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dmaviub4l/image/upload/v1698325626/djdpyrig9bo8e43ftbsp.png"
        />
        <meta
          property="og:url"
          content="https://bethsyf.github.io/portfolio/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} id="home">
        <NavbarView />
        <AboutMe />
        <TechnologiesView/>
        <ProjectsView />
        <ExperienceView/>
        <Footer />
      </main>
    </>
  );
}
