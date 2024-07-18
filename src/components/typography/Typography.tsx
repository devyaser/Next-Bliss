import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "small";

interface Props {
    variant: Variant;
    children: React.ReactNode;
    className?: string;
    as?: ElementType;
  }


const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span"
};

const sizes: Record<Variant, string> = {
  h1: "sm:text-2xl font-bold text-xl",
  h2: "sm:text-xl font-bold text-lg",
  h3: "sm:text-lg font-bold text-md",
  h4: "sm:text-md font-bold text-buttonsize",
  h5: "sm:text-buttonsize font-bold text-basetext",
  body: "sm:text-basetext text-navtext",
  "body-small": "sm:text-navtext text-sm",
  small: "sm:text-sm text-xs"
};

export const Typography = ({ variant, children, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return <Tag className={`${sizeClasses} ${className}`}>{children}</Tag>;
};