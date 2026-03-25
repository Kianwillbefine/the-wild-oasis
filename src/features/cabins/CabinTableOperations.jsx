import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import { useLanguage } from "../../context/LanguageContext";

function CabinTableOperations() {
  const { t } = useLanguage();
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: t("cabins.all") },
          { value: "no-discount", label: t("cabins.noDiscount") },
          { value: "with-discount", label: t("cabins.withDiscount") },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: t("cabins.sortNameAsc") },
          { value: "name-desc", label: t("cabins.sortNameDesc") },
          { value: "regularPrice-asc", label: t("cabins.sortPriceAsc") },
          { value: "regularPrice-desc", label: t("cabins.sortPriceDesc") },
          { value: "maxCapacity-asc", label: t("cabins.sortCapacityAsc") },
          { value: "maxCapacity-desc", label: t("cabins.sortCapacityDesc") },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
