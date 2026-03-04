import React from "react";
import s from "./CardControl.module.scss";

interface CardControlProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function CardControl({
  children,
  className,
  hoverable = true,
}: CardControlProps) {
  const classes = [
    s.card,
    hoverable && s.hoverable,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <article className={classes}>{children}</article>;
}