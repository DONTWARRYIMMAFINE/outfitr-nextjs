"use client";

import { Box, Image } from "@/components/ui";
import { MediaFragment } from "@/lib/graphql/schema.generated";
import { prepareBlurImage } from "@/lib/utils/image.helper";
import { useTheme } from "@mui/material";
import { FC, useState } from "react";
import ReactImageMagnify from "react-image-magnify";

interface ImageViewerProps {
  media: MediaFragment[];
}

const ImageViewer: FC<ImageViewerProps> = ({ media }) => {
  const { shape } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <ReactImageMagnify
        style={{ zIndex: 10 }}
        imageStyle={{ borderRadius: shape.borderRadius * 0.5 }}
        {...{
          smallImage: {
            alt: "Product",
            isFluidWidth: true,
            src: media[activeStep].url,
          },
          largeImage: {
            alt: "",
            src: media[activeStep].url,
            width: media[activeStep].width! * 2,
            height: media[activeStep].height! * 2,
          },
          isHintEnabled: true,
        }}
      />
      <Box display={"flex"} padding={2} gap={2} flexWrap={"wrap"} width={"100%"} bgcolor={"background.body"} borderRadius={0.5}>
        {media.map(({ id, url, width, height }, index) => (
          <Box key={id} position={"relative"} width={width! * 0.1} height={height! * 0.1} borderRadius={0.25} overflow={"hidden"}>
            <Image
              src={url}
              blurDataURL={prepareBlurImage(
                url,
                Math.floor(width! / 10),
                Math.floor(height! / 10),
              )}
              placeholder={url ? "blur" : undefined}
              alt={"Ops..."}
              onClick={() => setActiveStep(index)}
              style={{ objectFit: "cover" }}
              fill
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ImageViewer;
