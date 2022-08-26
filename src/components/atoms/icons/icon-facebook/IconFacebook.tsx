import React from "react";

function IconFacebook({ className, style, testId }) {
  return (
    <svg
      className={className}
      style={style}
      data-testid={testId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path d="m279 288 14-93h-89v-60c0-25 13-50 53-50h40V6s-37-6-72-6c-73 0-121 44-121 125v70H23v93h81v224h100V288z" />
    </svg>
  );
}

IconFacebook.displayName = "IconFacebook";

IconFacebook.defaultProps = {
  className: "icon facebook",
  style: {
    width: "16px",
    height: "auto",
  },
  testId: "icon-facebook",
};

export default IconFacebook;
