import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useLanguage } from "../context/LanguageContext";

function Cabins() {
  const { t } = useLanguage();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t("pages.cabins.title")}</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
