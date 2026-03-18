import { blogPosts } from "@/data/blogPost";

import BlogCard from "../blogCard/BlogCard";

import { SectionHeader, SectionLayout } from "@/components/layout";
import { ButtonControl } from "@/components/controls";

import s from "./BlogPreview.module.scss";
import { useTranslation } from "@/hooks/useTranslation";

export default function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3);
  const t = useTranslation("blog");
  return (
    <section id="blog">
      <SectionLayout paddingY="8rem" align="center">
        <div className={s.content}>
          <SectionHeader title={t.title} description={t.description} />

          <div className={s.grid}>
            {previewPosts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>

          <div className={s.buttons}>
            <ButtonControl href="/blog">{t.cta}</ButtonControl>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
}
