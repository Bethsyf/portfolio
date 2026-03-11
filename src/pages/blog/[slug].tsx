import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { blogPosts } from "@/data/blogPost";

import TextControl from "@/components/controls/text/TextControl";

import s from "@/styles/pages/PostPage.module.scss";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const post = blogPosts.find((post) => post.slug === slug);
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
      <main className={s.container}>
        <Link href="/blog" className={s.back}>
          ← Volver al blog
        </Link>
        <article className={s.article}>
          <div className={s.imageWrapper}>
            <Image
              width={800}
              height={600}
              src={post.image}
              alt={post.title}
              className={s.image}
              priority
            />
          </div>
          <header className={s.header}>
            <TextControl as="h1" variant="hero" className={s.title}>
              {post.title}
            </TextControl>
            <TextControl as="span" variant="caption" className={s.meta}>
              <time>{post.date}</time> • {post.readingTime}
            </TextControl>
          </header>
          <div className={s.content}>{post.content}</div>
        </article>
      </main>
    </>
  );
}
