import Filter from "../../ui/Filter";
import { useLanguage } from "../../context/LanguageContext";

function DashboardFilter() {
  const { t } = useLanguage();

  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: t("dashboardPage.last7") },
        { value: "30", label: t("dashboardPage.last30") },
        { value: "90", label: t("dashboardPage.last90") },
      ]}
    />
  );
}

export default DashboardFilter;
