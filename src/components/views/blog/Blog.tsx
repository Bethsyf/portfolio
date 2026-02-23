import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.scss";
import { blogPosts } from "@/data/blogPost";

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.container} id="blog">
      <div className={styles.content}>
        <h2 className={styles.title}>
          Blog
        </h2>
        <p className={styles.subtitle}>
          Aquí documento mi proceso de reconectar con el desarrollo frontend,
          repasando fundamentos, aprendiendo nuevas herramientas y fortaleciendo mis habilidades en el camino.
        </p>
        <div className={styles.grid}>
          {previewPosts.map((post) => (
            <article key={post.slug} className={styles.card}>
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={220}
                  className={styles.image}
                />
                <div className={styles.cardContent}>
                  <h3>
                    {post.title}
                  </h3>
                  <p>
                    {post.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <Link
          href="/blog"
          className={styles.button}
        >
          Ver todos los artículos
        </Link>
      </div>
    </section>
  );
}