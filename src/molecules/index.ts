import Breadcrumb from "./breadcrumb";
import SectionLinks from "./section-links";
import ShareContent from "./share-content";

const components = "Molecules";

const moleculesTitles = {
  breadcrumb: `${components}/${Breadcrumb.displayName}`,
  sectionLinks: `${components}/${SectionLinks.displayName}`,
  sharedContent: `${components}/${ShareContent.displayName}`,
};

export default moleculesTitles;

export { Breadcrumb, SectionLinks, ShareContent };
