import React from "react";
import s from "./ButtonControl.module.scss";
import Link from "next/link";

type Variant =
  | "primary"
  | "secondary"
  | "icon";

type Size =
  | "sm"
  | "md"
  | "lg"
  | "icon-sm"
  | "icon-lg";
 

interface Props {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function ButtonControl({
  children,
  variant = "primary",
  size = "md",
  href,
  download,
  target,
  rel,
  type = "button",
  disabled,
  onClick,
}: Props) {

const className = `
  ${s.button}
  ${s[variant]}
  ${variant !== "icon" ? s[size] : ""}
`;

  if (href) {
    const isExternal = href.startsWith("http");
    const isDownload = download;

    if (isDownload) {
      return (
        <a
          href={href}
          download
          className={className}
        >
          {children}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={className}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}