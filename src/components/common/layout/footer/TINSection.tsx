import { Box, Text } from "@/components/ui";
import { FC } from "react";

const TINSection: FC = (props) => {
  return (
    <Box component={"section"} marginTop={1.5}>
      <Text variant={"small"} paragraph {...props}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolor doloremque ea facilis harum itaque minus sapiente. Architecto ducimus quibusdam quidem sint totam. Atque illo iure reiciendis, reprehenderit totam ut!
      </Text>
    </Box>
  );
};

export default TINSection;
