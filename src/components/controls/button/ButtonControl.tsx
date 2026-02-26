import React from "react";
import s from "./ButtonControl.module.scss";

type Variant =
  | "primary"
  | "secondary"
  | "icon";

type Size =
  | "sm"
  | "md"
  | "lg";

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

  onClick,

}: Props) {

  const className = `
    ${s.button}
    ${s[variant]}
    ${s[size]}
  `;

  if (href) {

    return (

      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={className}
      >

        {children}
      </a>
    );
  }
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}