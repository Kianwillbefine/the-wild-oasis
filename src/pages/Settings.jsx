import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useLanguage } from "../context/LanguageContext";

function Settings() {
  const { t } = useLanguage();

  return (
    <Row>
      <Heading as="h1">{t("pages.settings.title")}</Heading>
      <UpdateSettingsForm />
    </Row>
  );
}

export default Settings;
