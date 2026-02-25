import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/pages/BlogPage.module.scss";
import { blogPosts } from "@/data/blogPost";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog | Bethsy Falcon</title>
      </Head>
      <main className={styles.container}>
        <Link href="/" className={styles.back}>
          ← Volver al inicio
        </Link>
        <h1 className={styles.title}>
          <h1 className={styles.title}>
            Reconectando con el código
          </h1>
        </h1>
        <p className={styles.description}>
          Reflexiones, aprendizajes y decisiones técnicas mientras fortalezco mis bases como frontend developer.
        </p>
        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <img
                src={post.image}
                alt={post.title}
                className={styles.image}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {post.title}
                </h3>
                <p className={styles.cardDescription}>
                  {post.description}
                </p>
                <span className={styles.meta}>
                  {post.date} • {post.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogPage;