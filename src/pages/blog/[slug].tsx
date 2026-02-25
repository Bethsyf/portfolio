import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import { blogPosts } from "@/data/blogPost";
import styles from "@/styles/pages/PostPage.module.scss";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find(
    (post) => post.slug === slug
  );
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | Bethsy Falcon</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Head>
      <main className={styles.container}>
        <Link href="/blog" className={styles.back}>
          ← Volver al blog
        </Link>
        <article className={styles.article}>
          <img
            src={post.image}
            alt={post.title}
            className={styles.image}
          />
          <header className={styles.header}>
            <h1 className={styles.title}>
              {post.title}
            </h1>
            <span className={styles.meta}>
              {post.date} • {post.readingTime}
            </span>
          </header>
          <div className={styles.content}>
            {post.content}
          </div>
        </article>
      </main>
    </>
  );
}