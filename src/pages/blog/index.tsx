import Head from 'next/head';
import Link from 'next/link';
import NavbarView from '@/components/views/navbar/NavbarView';
import Footer from '@/components/views/footer/Footer';

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Bethsy Falcon</title>
        <meta
          name="description"
          content="Blog donde comparto mi aprendizaje, retos técnicos y evolución como desarrolladora."
        />
      </Head>

      <main
        style={{
          minHeight: '80vh',
          padding: '8rem 2rem',
          textAlign: 'center'
        }}
      >
        

        <h1>Blog en construcción 🚀</h1>

        <p style={{ maxWidth: '600px', margin: '2rem auto 4rem auto' }}>
          Aquí compartiré cómo aprendo, cómo resuelvo problemas y mi evolución
          como desarrolladora. Muy pronto encontrarás artículos técnicos y
          experiencias reales del camino.
        </p>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: '2rem',
            textDecoration: 'none',
            color: '#c57442',
            fontWeight: 600
          }}
        >
          ← Volver al inicio
        </Link>
      </main>

    </>
  );
};

export default BlogPage;
