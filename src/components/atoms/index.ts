import {
  IconFacebook,
  IconLinkedLn,
  IconPinterest,
  IconTwitter,
} from "./icons/";
import Link from "./link";
import Logo from "./logo";
import ShareLink from "./share-link";
import TitleSection from "./title-section";
import TitleSubsection from "./title-subsection";
import Breadcrumb from "./breadcrumb";

const components = "Atoms";
const icons = "Icons";

const atomsTitles = {
  breadcrumb: `${components}/${Breadcrumb.displayName}`,
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

export { Logo, ShareLink };
