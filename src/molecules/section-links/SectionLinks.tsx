import React from "react";
import Box from "@mui/material/Box";
import { Link } from '../../atoms'
import { LinkType } from '../../types'

type SectionLinksProps = {
  className?: string;
  links: Array<LinkType>
  sx?: object;
  testId: string;
};

function SectionLinks({ className, links, sx, testId }: SectionLinksProps) {
  return (
    <Box className={className} sx={sx} id={testId} data-testid={testId}>
      <Box component="p" sx={sx} className="hide">
        In this section:
      </Box>
      <ol>
        {links?.map(({ children, className, component, href, sx, testId, title, typographyVariant }) => {
          return (
            <li key={testId}>
              <Link
                className={className}
                component={component}
                href={href}
                sx={sx}
                testId={testId}
                title={title}
                typographyVariant={typographyVariant}
              >
                {children}
              </Link>
            </li>
          )
        })}
      </ol>
    </Box >
  )
}

SectionLinks.defaultProps = {
  className: "vz-molecule SectionLinks",
  component: "a",
  href: "#",
  links: [
    {
      children: 'The Server',
      className: "vz-atom-link-text supporting-cover-line-item",
      component: "a",
      href: "#",
      sx: { color: '#ff3b00' },
      testId: "vz-at-first-the-server",
      title: "The Server",
      typographyVariant: "body1",

    },
    {
      children: 'The Navigator',
      className: "vz-atom-link-text supporting-cover-line-item",
      component: "a",
      href: "#the-navigator",
      sx: { color: '#ff3b00' },
      testId: "vz-at-first-the-navigator",
      title: "The Navigator",
      typographyVariant: "body1",

    },
    {
      children: 'The Purifier',
      className: "vz-atom-link-text supporting-cover-line-item",
      component: "a",
      href: "#",
      sx: { color: '#ff3b00' },
      testId: "vz-at-first-the-purifier",
      title: "The Purifier",
      typographyVariant: "body1",

    },
  ],
  sx: { width: "100%" },
  testId: "vz-atom-SectionLinks-with-icon",
  title: "SectionLinks with icon",
  typographyVariant: "body1",
};

SectionLinks.displayName = "SectionLinks";

export default SectionLinks;
