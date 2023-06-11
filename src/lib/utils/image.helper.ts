import { insertAtIndex } from "@/lib/utils/string.utils";

export function prepareBlurImage(url?: string, width?: number, height?: number) {
  if (url && width && height) {
    const upload = "upload";
    const index = url.indexOf(upload);
    return insertAtIndex(url, `w_${width},h_${height}/`, index + upload.length + 1)
  }
}
