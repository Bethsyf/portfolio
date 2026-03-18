import Head from "next/head";
import Link from "next/link";

import { blogPosts } from "@/data/blogPost";

import { TextControl } from "@/components/controls";
import { BlogCard } from "@/components/views";

import s from "@/styles/pages/BlogPage.module.scss";

const BlogPage = () => {
  const posts = blogPosts.slice(0, 3);
  return (
    <>
      <Head>
        <title>Blog | Bethsy Falcon</title>
      </Head>

      <main className={s.container}>
        <Link href="/" className={s.back}>
          ← Volver al inicio
        </Link>

        <TextControl as="h1" variant="title" className={s.title}>
          Reconectando con el código
        </TextControl>

        <TextControl as="p" variant="body" className={s.description}>
          Reflexiones, aprendizajes y decisiones técnicas mientras fortalezco mis bases como
          frontend developer.
        </TextControl>

        <div className={s.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default BlogPage;
