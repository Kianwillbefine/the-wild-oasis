import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useLanguage } from "../context/LanguageContext";

function Dashboard() {
  const { t } = useLanguage();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t("pages.dashboard.title")}</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
