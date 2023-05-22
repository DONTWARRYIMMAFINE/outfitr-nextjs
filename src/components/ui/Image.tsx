"use client";

import MuiImage, { ImageProps as MuiImageProps } from "next/image";
import { forwardRef } from "react";

interface ImageProps extends MuiImageProps {}

const Image = forwardRef<
  HTMLImageElement, ImageProps
>((props, ref) => {
  return <MuiImage ref={ref} {...props} />;
});

Image.displayName = "Image"

export default Image;
