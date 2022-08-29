import React from "react";
import { SHARE_LINKS } from "./constants";

type ShareToolsType = {
  children: React.ReactNode;
};

function ShareContent({ children }: ShareToolsType) {
  return (
    <p id="shareTools" data-testid="shareTools">
      {children}
    </p>
  );
}

ShareContent.displayName = "ShareContent";

ShareContent.defaultProps = {};

export default ShareContent;
