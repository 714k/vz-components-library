import React from "react";

function Logo({ className, styles }) {
  return (
    <svg
      className={className}
      style={styles}
      width="40"
      height="30"
      viewBox="0 0 21.167 15.875"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          style={{ fill: "#373748", fillOpacity: 1, strokeWidth: ".264583" }}
          d="M55.562 52.917v5.291L66.146 63.5v-5.292Z"
          transform="translate(-55.562 -52.917)"
        />
        <path
          style={{ fill: "#0cf", fillOpacity: 1, strokeWidth: ".264583" }}
          d="M66.146 58.208V63.5l-10.584 5.292V63.5z"
          transform="translate(-55.562 -52.917)"
        />
        <path
          style={{ fill: "#373748", fillOpacity: 1, strokeWidth: ".264583" }}
          d="M89.958 63.5h10.584v5.292H89.958Z"
          transform="translate(-79.375 -52.917)"
        />
      </g>
    </svg>
  );
}

Logo.defaultProps = {
  className: "main-logo",
  styles: { width: "50px" },
};

export default Logo;
