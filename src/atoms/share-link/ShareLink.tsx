import React, { FC } from "react";
import styled from "styled-components";

interface ShareLinkProps {
  href: string;
  className: string;
  children: React.ReactNode;
  showBullet?: boolean;
}

const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  transform: perspective(60px);
  perspective-origin: center;
  transition: transform 0.3s linear;
  margin-right: 2.5rem;

  &:hover {
    transform: none;
    transition: all 0.3s linear;

    &:before {
      transition: all 0.3s linear;
      transform: rotateY(0deg) translateX(0px);
    }

    &:after {
      transition: all 0.3s linear;
      transform: rotateY(90deg) translateX(0px);
    }
  }

  span {
    text-indent: -100000em;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }

  &:before,
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    transform-style: preserve-3d;
    transition: all 0.3s linear;
  }

  &:before {
    transform: perspective(75px) rotateY(-45deg) translateX(-15px);
    background-color: #cd2c01;
    z-index: 2;
  }

  &:after {
    transform: perspective(75px) rotateY(45deg) translateX(15px);
    background-color: #711801;
    z-index: 1;
  }
`;

/**
 *
 * @param href
 * @param className
 * @param children
 * @param showBullet
 * @constructor
 */
function ShareLink({ href, className, children, showBullet }: ShareLinkProps) {
  return (
    <>
      <Link rel="nofollow" href={href} className={className} target="_blank">
        {children}
      </Link>
      {showBullet && <span>&bull;</span>}
    </>
  );
}

ShareLink.displayName = "ShareLink";

ShareLink.defaultProps = {
  href: "#",
  className: "share-link facebook",
  children: <span>Facebook</span>,
  showBullet: false,
};

export default ShareLink;
