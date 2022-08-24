import Logo from "./logo";
import ShareLink from "./share-link";
import TitleSection from "./title-section";
import TitleSubsection from "./title-subsection";

const components = "Atoms";

const atomsTitles = {
  logo: `${components}/${Logo.displayName}`,
  sharedLink: `${components}/${ShareLink.displayName}`,
  titleSection: `${components}/${TitleSection.displayName}`,
  titleSubsection: `${components}/${TitleSubsection.displayName}`,
};

export default atomsTitles;

export { Logo, ShareLink };
