import styled from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { useLanguage } from "../context/LanguageContext";

const LanguageLabel = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 4.8rem;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-brand-600);
`;

function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  function handleToggleLanguage() {
    setLanguage((currentLanguage) => (currentLanguage === "en" ? "zh-CN" : "en"));
  }

  return (
    <ButtonIcon
      onClick={handleToggleLanguage}
      title={t("common.languageToggle")}
      aria-label={t("common.languageToggle")}
    >
      <LanguageLabel>{language === "en" ? "EN" : "中文"}</LanguageLabel>
    </ButtonIcon>
  );
}

export default LanguageToggle;
