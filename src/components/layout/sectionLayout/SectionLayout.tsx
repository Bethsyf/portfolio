import React, { ReactNode } from "react";
import s from "./SectionLayout.module.scss";

interface SectionLayoutProps {
  children: ReactNode;
  align?: "center" | "left";
  paddingY?: string;
  maxWidth?: string;
}

export default function SectionLayout({
  children,
  align = "center",
  paddingY = "4rem",
  maxWidth = "1100px",
}: SectionLayoutProps) {
  return (
    <section
      className={s.sectionLayout}
      style={{
        textAlign: align,
        padding: `${paddingY} 2rem`,
        maxWidth,
        margin: "0 auto",
      }}
    >
      {children}
    </section>
  );
}
