import Breadcrumb from "./breadcrumb";
import Header from "./header";
import SectionLinks from "./section-links";
import ShareContent from "./share-content";

const components = "Molecules";

const moleculesTitles = {
  breadcrumb: `${components}/${Breadcrumb.displayName}`,
  header: `${components}/${Header.displayName}`,
  sectionLinks: `${components}/${SectionLinks.displayName}`,
  sharedContent: `${components}/${ShareContent.displayName}`,
};

export default moleculesTitles;

export { Breadcrumb, ShareContent };
