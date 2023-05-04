import { Container, Grid } from "@/components/ui";
import { FC, ReactNode } from "react";

export interface Grid2X1Props {
  block1: ReactNode;
  block2: ReactNode;
  background?: ReactNode;
  reversed?: boolean;
}

const Grid2x1: FC<Grid2X1Props> = ({ block1, block2, background, reversed }) => {
  return (
    <Container disableGutters>
      <Grid container position={"relative"} flexDirection={reversed ? "row-reverse" : "row"} overflow={"hidden"}>
        <Grid item md={6} xs={12}>
          {block1}
        </Grid>
        <Grid item md={6} xs={12}>
          {block2}
        </Grid>
        {background}
      </Grid>
    </Container>
  );
};

export default Grid2x1;
