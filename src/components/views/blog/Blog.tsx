import Link from 'next/link';
import styles from './Blog.module.scss';

const BlogPreview = () => {
  return (
    <section className={styles.container} id="blog">
      <div className={styles.content}>
        <h2 className={styles.title}>Blog</h2>
        <h3 className={styles.title}>Reconectando con el código</h3>

        <p className={styles.description}>
          Un espacio donde comparto cómo aprendo, cómo resuelvo problemas y cómo
          evoluciono como desarrolladora. Aquí documento ideas, retos técnicos y
          descubrimientos que forman parte de mi crecimiento profesional.
        </p>

        <Link href="/blog" className={styles.button}>
          Leer artículos
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
