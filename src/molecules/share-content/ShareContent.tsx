import React from "react";
import { SHARE_LINKS } from "./constants";
import { ShareLink } from "../../atoms";

function ShareContent() {
  return (
    <p id="shareTools" data-testid="shareTools">
      {Object.values(SHARE_LINKS).map(({ HREF: href, TEXT: text }) => {
        return (
          <ShareLink
            href={href}
            className="share"
            key={text}
            text={text}
            showBullet
          />
        );
      })}
    </p>
  );
}

ShareContent.displayName = 'ShareContent'

export default ShareContent;
