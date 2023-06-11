import { Icons, IconTextField } from "@/components/ui";
import { I18NS } from "@/constants/I18NS";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { WithTranslation, withTranslation } from "react-i18next";

interface SearchFieldProps extends WithTranslation {
  value: string;
  onChange: (value: string) => void;
  onClick: (value: string) => void;
}

const SearchButton = styled(Icons.Search)(({ theme }) => ({
  width: 36,
  height: 36,
  padding: theme.spacing(0.5),
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.palette.background.component,
    borderRadius: "50%",
    transition: theme.transitions.create(["background-color"]),
  },
}));

const SearchField: FC<SearchFieldProps> = ({ value, onChange, onClick, t }) => {
  return (
    <IconTextField
      id={"searchField"}
      name={"searchField"}
      placeholder={t("content.search.placeholder")!}
      value={value}
      onChange={event => onChange(event.target.value)}
      variant={"outlined"}
      iconEnd={<SearchButton onClick={() => onClick(value)} />}
      required
      fullWidth
    />
  );
};

export default withTranslation(I18NS.Catalog)(SearchField);
