import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function OrdersOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "全部状态" },
          { value: "pending", label: "待处理" },
          { value: "confirmed", label: "已确认" },
          { value: "completed", label: "已完成" },
          { value: "cancelled", label: "已取消" },
        ]}
      />

      <SortBy
        options={[
          { value: "created_at-desc", label: "按时间排序（最近优先）" },
          { value: "created_at-asc", label: "按时间排序（最早优先）" },
          { value: "amount-desc", label: "按金额排序（高到低）" },
          { value: "amount-asc", label: "按金额排序（低到高）" },
        ]}
      />
    </TableOperations>
  );
}

export default OrdersOperations;
