import React from "react";

type ShareToolsType = {
  children: React.ReactNode;
  id: string;
};

function ShareContent({ children, id }: ShareToolsType) {
  return (
    <p id={id} data-testid={id}>
      {children}
    </p>
  );
}

ShareContent.displayName = "ShareContent";

ShareContent.defaultProps = {
  id: "shareContent",
};

export default ShareContent;
