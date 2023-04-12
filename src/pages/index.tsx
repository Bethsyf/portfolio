import Head from 'next/head';
import styles from '@/styles/pages/Home.module.scss';
import NavbarView from '@/components/views/navbar/NavbarView';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <NavbarView isHomePage={true} />
        </div>
      </main>
    </>
  );
}
