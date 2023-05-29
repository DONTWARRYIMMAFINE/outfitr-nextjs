import CommentList from "@/components/common/ProductDetails/CommentSection/CommentList";
import { Box } from "@/components/ui";
import { FC } from "react";

interface CommentSectionProps {
  productId: string;
}

const CommentSection: FC<CommentSectionProps> = ({ productId }) => {
  return (
    <Box>
      <CommentList productId={productId} />
    </Box>
  );
};

export default CommentSection;
