import OnboardingRow from "@/components/common/Onboarding/OnboardingRow";
import { Box } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { Routes } from "@/constants/routes";
import { Categories } from "@/lib/graphql/schema.generated";
import { useTranslation } from "@/lib/i18n";
import { LngProps } from "@/lib/types/params.type";

interface OnboardingProps extends LngProps {}

const Onboarding = async ({ lng }: OnboardingProps) => {
  const { t } = await useTranslation(lng, I18NS.Home);

  return (
    <Box display={"flex"} flexDirection={"column"} gap={{ md: 8, sm: 6, xs: 4 }}>
      {[1, 2, 3].map((_, index) => (
        <OnboardingRow
          key={index}
          image={`/assets/onboarding/onboarding${index}.jpg`}
          advertising={t(`onboarding.${index}.advertising`)}
          title={t(`onboarding.${index}.title`)}
          description={t(`onboarding.${index}.description`)}
          button={{ href: `${Routes.Catalog.href}/${Categories.Women}`, text: t(`onboarding.${index}.button.text`) }}
          reversed={index % 2 !== 0}
        />
      ))}
    </Box>
  );
};

export default Onboarding;
