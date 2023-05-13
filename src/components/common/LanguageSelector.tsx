"use client";

import { Box, Link } from "@/components/ui";
import { useTranslation } from "@/lib/i18n/client";
import { languages } from "@/lib/i18n/settings";
import { LngProps } from "@/lib/types/params.type";
import { join } from "lodash";
import { usePathname } from "next-intl/client";
import { Trans } from "react-i18next/TransWithoutContext";

interface LanguageSelectorProps extends LngProps {}

const LanguageSelector = ({ lng }: LanguageSelectorProps) => {
  const pathname = usePathname();
  const { t } = useTranslation(lng, "footer");

  return (
    <Box>
      <Trans i18nKey={"languageSwitcher"} t={t} values={{ lng }} components={{ bold: <strong /> }} />
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (" or ")}
            <Link href={"/" + join([l, pathname], "/")}>
              {l}
            </Link>
          </span>
        );
      })}
    </Box>
  );
};

export default LanguageSelector;
