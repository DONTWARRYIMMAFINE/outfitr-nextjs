import OnboardingRow, { OnboardingRowProps } from "@/components/common/Onboarding/OnboardingRow";
import { Box } from "@/components/ui";
import { TProps } from "@/lib/types/params.type";
import { Trans } from "react-i18next/TransWithoutContext";

const onboardingRows = [
  {
    image: "",
    advertising: "onboarding.0.advertising",
    title: "onboarding.0.title",
    description: "onboarding.0.description",
    button: {
      href: "#",
      text: "onboarding.0.button.text",
    },
  },
  {
    image: "",
    advertising: "onboarding.1.advertising",
    title: "onboarding.1.title",
    description: "onboarding.1.description",
    button: {
      href: "#",
      text: "onboarding.1.button.text",
    },
  },
  {
    image: "",
    advertising: "onboarding.2.advertising",
    title: "onboarding.2.title",
    description: "onboarding.2.description",
    button: {
      href: "#",
      text: "onboarding.2.button.text",
    },
  },
  {
    image: "",
    title: "onboarding.3.title",
    description: "onboarding.3.description",
    button: {
      href: "#",
      text: "onboarding.3.button.text",
    },
  },
];

interface OnboardingProps extends TProps {}

const Onboarding = ({ t }: OnboardingProps) => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, sm: 6, xs: 4 }}>
      {onboardingRows.map(({ image, advertising, title, description, button }, index) => (
        <OnboardingRow
          key={index}
          image={image}
          advertising={<Trans i18nKey={advertising} t={t} />}
          title={<Trans i18nKey={title} t={t} />}
          description={<Trans i18nKey={description} t={t} />}
          button={{...button, text: <Trans i18nKey={button.text} t={t} />}}
          reversed={index % 2 !== 0}
        />
      ))}
    </Box>
  );
};

export default Onboarding;
