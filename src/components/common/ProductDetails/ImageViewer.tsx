"use client";

import { Box } from "@/components/ui";
import { MediaFragment } from "@/lib/graphql/schema.generated";
import { useTheme } from "@mui/material";
import { FC } from "react";
import ReactImageMagnify from "react-image-magnify";

interface ImageViewerProps {
  media: MediaFragment[];
}

const ImageViewer: FC<ImageViewerProps> = ({ media }) => {
  const { shape } = useTheme();

  return (
    <Box>
      <ReactImageMagnify
        style={{ zIndex: 10 }}
        imageStyle={{ borderRadius: shape.borderRadius * 0.5 }}
        {...{
          smallImage: {
            alt: "Product",
            isFluidWidth: true,
            src: media[0]?.url,
          },
          largeImage: {
            alt: "",
            src: media[0]?.url,
            width: media[0]?.width! * 2,
            height: media[0]?.height! * 2,
          },
          isHintEnabled: true,
        }}
      />
    </Box>
  );
};

export default ImageViewer;
