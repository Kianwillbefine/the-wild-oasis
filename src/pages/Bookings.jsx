import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useLanguage } from "../context/LanguageContext";

function Bookings() {
  const { t } = useLanguage();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{t("pages.bookings.title")}</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
