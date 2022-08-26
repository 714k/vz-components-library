import React, { FC } from "react";
import styled from "styled-components";

interface ShareLinkProps {
  href: string;
  className: string;
  text: string;
  showBullet?: boolean;
}

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  transform: perspective(400px);

  span {
    text-indent: -100000em;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    
    &:after {
      content: 'f';
      position: absolute;
      text-indent: 0;
      z-index: 2;
    }
  }

  &:before,
  &:after {
    content: " ";
    width: 30px;
    height: 30px;
    position: absolute;
  }

  &:before {
    transform: perspective(100px) rotateY(-45deg) translateX(-15px);
    background-color: #cd2c01;
  }

  &:after {
    transform-style: preserve-3d;
    transform: perspective(100px) rotateY(45deg) translateX(15px);
    background-color: #711801;
  }
`;

/**
 *
 * @param href
 * @param className
 * @param text
 * @param showBullet
 * @constructor
 */
function ShareLink({ href, className, text, showBullet }: ShareLinkProps) {
  return (
    <>
      <Link rel="nofollow" href={href} className={className} target="_blank">
        <span>{text}</span>
      </Link>
      {showBullet && <span>&bull;</span>}
    </>
  );
}

ShareLink.displayName = "ShareLink";

export default ShareLink;
