import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/pages/PostPaage.module.scss";
import { blogPosts } from "@/data/blogPost";

const PostPage = () => {

  const router = useRouter();

  const { slug } = router.query;


  const post = blogPosts.find(
    (p) => p.slug === slug
  );


  if (!post) {

    return (
      <main className={styles.container}>
        <p>Post no encontrado</p>

        <Link href="/" className={styles.back}>
          ← Volver
        </Link>

      </main>
    );

  }


  return (

    <>

      <Head>

        <title>
          {post.title} | Bethsy Falcon
        </title>

      </Head>


      <main className={styles.container}>


        <Link
          href="/blog"
          className={styles.back}
        >
          ← Volver al blog
        </Link>



        <img
          src={post.image}
          alt={post.title}
          className={styles.image}
        />



        <h1 className={styles.title}>
          {post.title}
        </h1>



        <span className={styles.meta}>
          {post.date} • {post.readingTime}
        </span>



        <article className={styles.content}>

          {post.content}

        </article>



      </main>

    </>

  );

};

export default PostPage;