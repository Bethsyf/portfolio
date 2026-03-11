import React from "react";

import s from "./TextControl.module.scss";

interface TextControlProps {
  as?: "h1" | "h2" | "h3" | "p" | "span";
  variant?: "hero" | "title" | "subtitle" | "body" | "caption" | "label";
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
  className?: string;
}

export default function TextControl({
  as: Component = "p",
  variant = "body",
  align = "left",
  children,
  className = "",
}: TextControlProps) {
  return (
    <Component className={`${s.text} ${s[variant]} ${s[align]} ${className}`}>{children}</Component>
  );
}
