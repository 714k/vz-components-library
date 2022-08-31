import Breadcrumb from "./breadcrumb";
import Header from "./header";
import ShareContent from "./share-content";

const components = "Molecules";

const moleculesTitles = {
  breadcrumb: `${components}/${Breadcrumb.displayName}`,
  header: `${components}/${Header.displayName}`,
  sharedContent: `${components}/${ShareContent.displayName}`,
};

export default moleculesTitles;

export { Breadcrumb, ShareContent };
