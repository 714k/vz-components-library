import {
  IconFacebook,
  IconLinkedLn,
  IconPinterest,
  IconTwitter,
} from "./icons";
import Copyright from "./copyright";
import Link from "./link";
import Logo from "./logo";
import ShareLink from "./share-link";
import TitleSection from "./title-section";
import TitleSubsection from "./title-subsection";

const components = "Atoms";
const icons = "Icons";

const atomsTitles = {
  copyright: `${components}/${Copyright.displayName}`,
  iconFacebook: `${components}/${icons}/${IconFacebook.displayName}`,
  iconLinkedLn: `${components}/${icons}/${IconLinkedLn.displayName}`,
  iconPinterest: `${components}/${icons}/${IconPinterest.displayName}`,
  iconTwitter: `${components}/${icons}/${IconTwitter.displayName}`,
  link: `${components}/${Link.displayName}`,
  logo: `${components}/${Logo.displayName}`,
  sharedLink: `${components}/${ShareLink.displayName}`,
  titleSection: `${components}/${TitleSection.displayName}`,
  titleSubsection: `${components}/${TitleSubsection.displayName}`,
};

export default atomsTitles;

export {
  IconFacebook,
  IconLinkedLn,
  IconPinterest,
  IconTwitter,
  Link,
  Logo,
  ShareLink,
  TitleSection,
  TitleSubsection,
};
