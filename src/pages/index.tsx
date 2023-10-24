import Head from 'next/head';

import styles from '@/styles/pages/Home.module.scss';
import NavbarView from '@/components/views/navbar/NavbarView';
import AboutMe from '@/components/views/aboutMe/AboutMe';
import ProjectsGrid from '@/components/views/projects/Projects';
import Footer from '@/components/views/footer/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Bethsy Falcon</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} id="home">
        <NavbarView />
        <AboutMe />
        <ProjectsGrid />
        <Footer />
      </main>
    </>
  );
}
