import Link from "next/link";
import Image from "next/image";
import styles from "./Blog.module.scss";
import { blogPosts } from "@/data/blogPost";
import ButtonControl from "@/components/controls/button/ButtonControl";
import CardControl from "@/components/controls/card/CardControl";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog">
      <SectionLayout paddingY="8rem" align="center">
        <div className={styles.content}>
          <SectionHeader
            title={" Blog"}
            description="Aquí documento mi proceso de reconectar con el desarrollo frontend,
          repasando fundamentos, aprendiendo nuevas herramientas y fortaleciendo mis habilidades en el camino."
          />
          <div className={styles.grid}>
            {previewPosts.map((post) => (
              <CardControl key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={220}
                    className={styles.image}
                  />
                  <div className={styles.cardContent}>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </div>
                </Link>
              </CardControl>
            ))}
          </div>
          <div className={styles.buttons}>
            <ButtonControl href="/blog">Ver todos los artículos</ButtonControl>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
