import Footer from "./footer";
import MainHeader from "./main-header";
import ShareContent from "./main-header";
import SectionHeader from "./section-header";

const components = "Organisms";

const organismTitles = {
  footer: `${components}/${Footer.displayName}`,
  mainHeader: `${components}/${MainHeader.displayName}`,
  sectionHeader: `${components}/${SectionHeader.displayName}`,
  shareContent: `${components}/${ShareContent.displayName}`,
};

export default organismTitles;

export { Footer, MainHeader, ShareContent };
