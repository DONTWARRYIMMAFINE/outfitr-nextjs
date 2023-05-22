import AboutRow, { AboutRowProps } from "./AboutRow";
import { Box } from "@/components/ui";
import { FC } from "react";

const content: AboutRowProps[] = [
  {
    image: "https://c4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-preview.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae blanditiis ipsum possimus quod veniam. Accusamus accusantium aspernatur eos error ex, exercitationem facilis molestiae placeat quidem quos repellendus repudiandae tenetur, velit? Alias amet architecto asperiores delectus deleniti ducimus eligendi eos excepturi expedita in ipsum iure modi natus nemo, nobis odit perferendis porro provident qui quisquam recusandae repudiandae sapiente tempore, totam ullam? Aperiam aut beatae, fugit harum nesciunt porro possimus tempore? Aliquam culpa cumque error fugiat hic quis. Facilis, laudantium officiis.",
    background: {
      title: "the beginning",
      year: 2012,
    },
  },
  {
    image: "https://c4.wallpaperflare.com/wallpaper/792/639/808/pattern-monochrome-telegram-logo-cats-hd-wallpaper-preview.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae blanditiis ipsum possimus quod veniam. Accusamus accusantium aspernatur eos error ex, exercitationem facilis molestiae placeat quidem quos repellendus repudiandae tenetur, velit? Alias amet architecto asperiores delectus deleniti ducimus eligendi eos excepturi expedita in ipsum iure modi natus nemo, nobis odit perferendis porro provident qui quisquam recusandae repudiandae sapiente tempore, totam ullam? Aperiam aut beatae, fugit harum nesciunt porro possimus tempore? Aliquam culpa cumque error fugiat hic quis. Facilis, laudantium officiis.",
    background: {
      title: "who we are now",
      year: 2023,
    },
  },
];

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, sm: 6, xs: 4 }}>
      {content.map(({ image, text, background }, i) => (
        <AboutRow key={i} image={image} text={text} background={background} reversed={i % 2 === 0} />
      ))}
    </Box>
  );
};

export default About;
