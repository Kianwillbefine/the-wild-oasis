import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useLanguage } from "../context/LanguageContext";

function Account() {
  const { t } = useLanguage();

  return (
    <>
      <Heading as="h1">{t("pages.account.title")}</Heading>

      <Row>
        <Heading as="h3">{t("pages.account.userData")}</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">{t("pages.account.password")}</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
