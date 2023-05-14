import OnboardingRow from "@/components/common/Onboarding/OnboardingRow";
import { Box } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";

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
    advertising: "onboarding.3.advertising",
    title: "onboarding.3.title",
    description: "onboarding.3.description",
    button: {
      href: "#",
      text: "onboarding.3.button.text",
    },
  },
];

interface OnboardingProps extends LngProps {}

const Onboarding = async ({ lng }: OnboardingProps) => {
  const { t } = await useTranslation(lng, I18NS.HOME);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, sm: 6, xs: 4 }}>
      {onboardingRows.map(({ image, advertising, title, description, button }, index) => (
        <OnboardingRow
          key={index}
          image={image}
          advertising={t(advertising)}
          title={t(title)}
          description={t(description)}
          button={{ ...button, text: t(button.text) }}
          reversed={index % 2 !== 0}
        />
      ))}
    </Box>
  );
};

export default Onboarding;
