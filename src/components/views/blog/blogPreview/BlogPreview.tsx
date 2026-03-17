import { blogPosts } from "@/data/blogPost";

import BlogCard from "../blogCard/BlogCard";

import { ButtonControl } from "@/components/controls";
import SectionHeader from "@/components/layout/sectionHeader/SectionHeader";
import SectionLayout from "@/components/layout/sectionLayout/SectionLayout";

import s from "./BlogPreview.module.scss";

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog">
      <SectionLayout paddingY="8rem" align="center">
        <div className={s.content}>
          <SectionHeader
            title="Blog"
            description="Aquí documento mi proceso de reconectar con el desarrollo frontend, repasando fundamentos, aprendiendo nuevas herramientas y fortaleciendo mis habilidades en el camino."
          />

          <div className={s.grid}>
            {previewPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className={s.buttons}>
            <ButtonControl href="/blog">Ver todos los artículos</ButtonControl>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
