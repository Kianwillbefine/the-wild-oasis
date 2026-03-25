import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import { useLanguage } from "../../context/LanguageContext";

function BookingTableOperations() {
  const { t } = useLanguage();
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: t("bookings.all") },
          { value: "checked-out", label: t("bookings.checkedOut") },
          { value: "checked-in", label: t("bookings.checkedIn") },
          { value: "unconfirmed", label: t("bookings.unconfirmed") },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: t("bookings.sortDateDesc") },
          { value: "startDate-asc", label: t("bookings.sortDateAsc") },
          {
            value: "totalPrice-desc",
            label: t("bookings.sortAmountDesc"),
          },
          { value: "totalPrice-asc", label: t("bookings.sortAmountAsc") },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
