import React from "react";
import Typography from "@mui/material/Typography";

type CopyrightType = {
  text: string;
  className?: string;
  sx?: object;
  testId: string;
};

function Copyright({ className, sx, text, testId }: CopyrightType) {
  return (
    <Typography className={className} sx={sx} variant="body2" data-testid={testId}>
      {text}
    </Typography>
  );
}

Copyright.defaultProps = {
  className: 'vz atom copyright',
  text: "2006 - 2022 | Designed & Developed by Victor Zamudio | Mexico, CDMX",
  testId: "copyright",
};

Copyright.displayName = "Copyright";

export default Copyright;
