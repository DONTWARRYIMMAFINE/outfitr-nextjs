import OnboardingRow, { OnboardingRowProps } from "@/components/common/onboarding/OnboardingRow";
import { Box } from "@/components/ui";
import { FC } from "react";

const onboardingRows: OnboardingRowProps[] = [
  {
    image: "",
    advertising: "Playful",
    title: "Hear it First, Wear it First",
    description: "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    button: {
      href: "#",
      text: "Find your outfit",
    },
  },
  {
    image: "",
    advertising: "Excentric",
    title: "Your Style, Your Way",
    description: "Create your individual & unique style and look amazing everyday",
    button: {
      href: "#",
      text: "Shop now",
    },
  },
  {
    image: "",
    advertising: "Funky",
    title: "Look Good, Feel Good",
    description: "Discover the latest trends in fashion and explore your personality",
    button: {
      href: "#",
      text: "Explore new ideas",
    },
  },
  {
    image: "",
    advertising: "Relaxed",
    title: "Find Your Outfits",
    description: "Confused about your outfit? Don’t worry! Find the best outfit here!",
    button: {
      href: "#",
      text: "Find your style",
    },
  },
];

interface OnboardingProps {}

const Onboarding: FC<OnboardingProps> = ({}) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, sm: 6, xs: 4 }}>
      {onboardingRows.map(({ image, advertising, title, description, button }, index) => (
        <OnboardingRow key={index} image={image} advertising={advertising} title={title} description={description} button={button} reversed={index % 2 !== 0} />
      ))}
    </Box>
  );
};

export default Onboarding;
