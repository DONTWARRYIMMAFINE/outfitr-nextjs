import CommentList from "@/components/common/ProductDetails/CommentSection/CommentList";
import { FC } from "react";

interface CommentSectionProps {
  productId: string;
}

const CommentSection: FC<CommentSectionProps> = ({ productId }) => {
  return <CommentList productId={productId} />;
};

export default CommentSection;
