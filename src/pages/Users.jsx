import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";
import { useLanguage } from "../context/LanguageContext";

function NewUsers() {
  const { t } = useLanguage();

  return (
    <>
      <Heading as="h1">{t("pages.users.title")}</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
