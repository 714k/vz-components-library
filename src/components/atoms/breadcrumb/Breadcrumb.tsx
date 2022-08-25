import React from "react";

type LinkProps = {
  current: string;
  href: string;
  text: string;
  title: string;
};

interface BreadcrumbProps {
  links: Array<LinkProps>;
}

function Breadcrumb({ links }: BreadcrumbProps) {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="breadcrumb"
        data-testid="breadcrumb"
      >
        <ol>
          {links?.map(({ current, href, text, title }) => {
            return (
              <li key={href}>
                <a href={href} aria-current={current} title={title}>
                  {text}
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

Breadcrumb.displayName = "Breadcrumb";

Breadcrumb.defaultProps = {
  links: [
    {
      current: "/",
      href: "#",
      text: "At first",
      title: "the start of the site",
    },
  ],
};

export default Breadcrumb;
