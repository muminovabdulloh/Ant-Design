import React from "react";
import { ToolTipButton, ToolTipContent } from "./style";

export const ToolTip = ({ toolBgColor, children, ...res }) => {
  return (
    <ToolTipButton {...res}>
      {children}
      <ToolTipContent toolBgColor={toolBgColor} {...res}>
        {toolBgColor ? toolBgColor : "Tooltip Text"}
      </ToolTipContent>
    </ToolTipButton>
  );
};
