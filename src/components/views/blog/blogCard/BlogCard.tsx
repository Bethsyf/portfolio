import Link from "next/link";
import Image from "next/image";

import { CardControl, TextControl } from "@/components/controls";

import s from "./BlogCard.module.scss";

interface BlogCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export default function BlogCard({ slug, title, description, image }: BlogCardProps) {
  return (
    <CardControl>
      <Link href={`/blog/${slug}`} className={s.link}>
        <Image src={image} alt={title} width={400} height={220} className={s.image} />

        <div className={s.content}>
          <TextControl as="h3" variant="title">
            {title}
          </TextControl>

          <TextControl variant="body">{description}</TextControl>
        </div>
      </Link>
    </CardControl>
  );
}
