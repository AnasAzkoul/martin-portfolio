import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  direction: "left" | "right";
  children: React.ReactNode;
}

const ArticleLinkButton = ({ href, children, direction, ...props }: Props) => {
  const linkStyles = clsx(
    clsx("articleLink-btn", {
      "left-0": direction === "left",
      "right-0": direction === "right",
    })
  );

  const iconStyles = "text-xl text-primary inline-block font-bold";

  return (
    <>
      {direction === "left" && (
        <Link href={href} className={`${linkStyles}`}>
          <span>
            <p className="order-1 px-2">Previous</p>
            <BsChevronLeft className={iconStyles} />
          </span>
        </Link>
      )}
      {direction === "right" && (
        <Link href={href} className={linkStyles}>
          <span>
            <p className="px-2">Next</p>
            <BsChevronRight className={iconStyles} />
          </span>
        </Link>
      )}
    </>
  );
};

export default ArticleLinkButton;
