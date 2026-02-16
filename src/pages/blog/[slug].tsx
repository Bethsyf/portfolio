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

        <title>
          {post.title} | Bethsy Falcon
        </title>

        <meta
          name="description"
          content={post.description}
        />

        {/* Open Graph */}

        <meta
          property="og:title"
          content={post.title}
        />

        <meta
          property="og:description"
          content={post.description}
        />

        <meta
          property="og:image"
          content={post.image}
        />

      </Head>


      <main className={styles.container}>

        <Link href="/blog" className={styles.back}>
          ← Volver al blog
        </Link>


        <article>

          <img
            src={post.image}
            className={styles.image}
          />

          <h1 className={styles.title}>
            {post.title}
          </h1>


          <div className={styles.content}>
            {post.content}
          </div>


        </article>

      </main>

    </>
  );
}