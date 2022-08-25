import React from "react";

interface ShareLinkProps {
  href: string;
  className: string;
  text: string;
  showBullet: boolean;
}

/**
 *
 * @param href
 * @param className
 * @param text
 * @param showBullet
 * @constructor
 */
function ShareLink({href, className, text, showBullet}: ShareLinkProps) {
  return (
    <>
      <a rel="nofollow" href={href} className={className} target="_blank">
        {text}
      </a>
      {showBullet && <span>&bull;</span>}
    </>
  );
}

ShareLink.displayName = 'ShareLink'

export default ShareLink