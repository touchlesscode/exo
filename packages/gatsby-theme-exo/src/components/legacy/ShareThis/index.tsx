/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { Button } from "theme-ui";

type shareThisURLType = {
  title: string;
  text: string;
  url?: string;
};
type shareThisFilesType = {
  title: string;
  text: string;
  files?: any[];
};
type sharingDataType = shareThisURLType | shareThisFilesType;
type shareThisDataType = {
  sharingData: sharingDataType;
};
type shareThisThemeType = {
  buttonStyle?: {};
};
type shareThisConfigType = {
  // onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
interface shareThisProps {
  shareThisData?: shareThisDataType;
  shareThisTheme?: shareThisThemeType;
  shareThisConfig?: shareThisConfigType;
}

const ShareThis: React.FC<shareThisProps> = ({
  shareThisData,
  shareThisTheme,
  shareThisConfig,
  children,
  ...props
}) => {
  const { sharingData } = shareThisData as shareThisDataType;
  const { buttonStyle } = shareThisTheme as shareThisThemeType;
  const shareData = (data: any) => {
    if (data.url) {
      (async () => {
        try {
          await navigator.share(data);
          console.log("Share was successful.");
        } catch (err) {
          console.log("Sharing failed", err);
        }
      })();
    } else if (data.files) {
      if (navigator.canShare && navigator.canShare({ files: data.files })) {
        navigator
          .share({
            files: data.files,
            title: "Pictures",
            text: "Our Pictures.",
          })
          .then(() => console.log("Share was successful."))
          .catch((error) => console.log("Sharing failed", error));
      } else {
        console.log(`Your system doesn't support sharing files.`);
      }
    }
  };
  return (
    <Button
      onClick={() => shareData(sharingData)}
      role="button"
      type="button"
      sx={{
        ...{
          background: "transparent",
          border: "unset",
          margin: 0,
          padding: "0",
          cursor: "pointer",
          outline: "none",
          boxShadow: "unset",
          transition: "all .3s ease-in-out",
          justifyContent: "center",
          alignItems: "center",
          textalign: "center",
          "&:hover": {
            outline: "none",
            border: "unset",
            boxShadow: "unset !important",
          },
          "&:focus": {
            outline: "none",
            border: "unset",
            borderRadius: "2px",
            boxShadow:
              "0 0 0 1px #151f2a, 0 0 0 3px #ffffff, 0 0 0 5px #eca400 !important",
          },
        },
        ...buttonStyle,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ShareThis;
