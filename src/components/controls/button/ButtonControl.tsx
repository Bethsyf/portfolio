import React, { forwardRef } from "react";
import Link from "next/link";
import s from "./ButtonControl.module.scss";

type Variant = "primary" | "secondary" | "icon";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  href?: string;
  download?: boolean;
}

type ButtonProps = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function ButtonControl(
    { children, variant = "primary", size = "md", href, download, className, ...rest },
    ref,
  ) {
    const classes = [s.button, s[variant], variant !== "icon" && s[size], className]
      .filter(Boolean)
      .join(" ");

    if (href) {
      const isExternal = href.startsWith("http");

      if (download) {
        return (
          <a
            href={href}
            download
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            {...rest}
          >
            {children}
          </a>
        );
      }

      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={classes}
            {...rest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...rest}>
        {children}
      </button>
    );
  },
);
