import { useLanguage } from "../context/LanguageContext";

function Empty({ resourceName }) {
  const { t } = useLanguage();
  return <p>{t("ui.emptyResource", { resource: resourceName })}</p>;
}

export default Empty;
