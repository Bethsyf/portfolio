import Link from "next/link";
import styles from "./Blog.module.scss";

const posts = [
  {
    slug: "reconectando-con-el-codigo",
    title: "Reconectando con el código",
    image: "/blog/blog1.jpg",
    description:
      "Cómo retomé la programación y el proceso mental detrás de volver a construir proyectos.",
  },
  {
    slug: "aprendiendo-nextjs",
    title: "Aprendiendo Next.js desde proyectos reales",
    image: "/blog/blog2.jpg",
    description:
      "Mi enfoque para aprender frameworks modernos construyendo soluciones reales.",
  },
  {
    slug: "pensamiento-dev",
    title: "Pensamiento de una desarrolladora",
    image: "/blog/blog3.jpg",
    description:
      "Cómo analizo problemas técnicos y desarrollo soluciones paso a paso.",
  },
];

const BlogPreview = () => {
  return (
    <section className={styles.container} id="blog">
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Blog</h2>
        <h3 className={styles.subtitle}>Reconectando con el código</h3>

        <div className={styles.grid}>
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={''}//href={`/blog/${post.slug}`}
              className={styles.card}
            >
              <img src={post.image} alt={post.title} />

              <div className={styles.cardContent}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/blog" className={styles.button}>
          Ver todos los artículos
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;