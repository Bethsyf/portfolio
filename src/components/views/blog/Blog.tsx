import Link from "next/link";
import styles from "./Blog.module.scss";
import { blogPosts } from "@/data/blogPost";

const BlogPreview = () => {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className={styles.container} id="blog">
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <h3 className={styles.subtitle}>
          Reconectando con el código
        </h3>
        <div className={styles.grid}>
          {previewPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <img
                src={post.image}
                alt={post.title}
              />
              <div className={styles.cardContent}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </Link>
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
};

export default BlogPreview;