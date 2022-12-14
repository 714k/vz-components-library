import React from "react";
import { IconType } from "../../../types";

function IconPinterest({ className, style, testId }: IconType) {
  return (
    <svg
      className={className}
      style={style}
      data-testid={testId}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M204 7C101 7 0 75 0 186c0 70 40 110 64 110 10 0 15-28 15-35 0-10-23-29-23-68 0-81 61-138 140-138 68 0 118 39 118 110 0 53-21 153-90 153-25 0-46-18-46-44 0-38 26-74 26-113 0-67-94-55-94 25 0 17 2 36 10 51-14 60-42 148-42 209 0 19 3 38 4 57 4 3 2 3 7 1 51-69 49-82 72-173 12 24 44 36 69 36 106 0 154-103 154-196C384 71 298 7 204 7z" />
    </svg>
  );
}

IconPinterest.displayName = "IconPinterest";

IconPinterest.defaultProps = {
  className: "icon pinterest small",
  style: {
    width: "16px",
    height: "auto",
  },
  testId: "icon-pinterest",
};

export default IconPinterest;
