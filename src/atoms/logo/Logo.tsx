import React from "react";

interface LogoProps {
  className?: string;
  description?: string;
  href?: string;
  style?: object;
  testId?: string;
  title?: string;
}

function Logo({
  className,
  description,
  href,
  style,
  testId,
  title,
}: LogoProps) {
  return (
    <>
      <h1 className={className} style={style}>
        <a href={href} title={title}>
          <svg
            aria-labelledby={`${title} ${description}`}
            data-testid={testId}
            role="img"
            width="100%"
            height="auto"
            viewBox="0 0 21.167 15.875"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title id={title}>{title}</title>
            <desc id={description}>{description}</desc>
            <g>
              <path
                style={{
                  fill: "#373748",
                  fillOpacity: 1,
                  strokeWidth: ".264583",
                }}
                d="M55.562 52.917v5.291L66.146 63.5v-5.292Z"
                transform="translate(-55.562 -52.917)"
              />
              <path
                style={{ fill: "#0cf", fillOpacity: 1, strokeWidth: ".264583" }}
                d="M66.146 58.208V63.5l-10.584 5.292V63.5z"
                transform="translate(-55.562 -52.917)"
              />
              <path
                style={{
                  fill: "#373748",
                  fillOpacity: 1,
                  strokeWidth: ".264583",
                }}
                d="M89.958 63.5h10.584v5.292H89.958Z"
                transform="translate(-79.375 -52.917)"
              />
            </g>
          </svg>
        </a>
      </h1>
    </>
  );
}

Logo.displayName = "Logo";

Logo.defaultProps = {
  className: "vz atom main-logo small",
  description: "Logotype of Victor Zamudio",
  href: "/at-first",
  style: { width: "40px" },
  testId: "main-logo",
  title: "Victor Zamudio, UI Developer Portfolio",
};

export default Logo;
