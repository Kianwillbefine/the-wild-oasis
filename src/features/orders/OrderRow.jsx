import styled from "styled-components";
import Tag from "../../ui/Tag";
import { formatCurrency, formatDateTime } from "../../utils/helpers";

const Row = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr 2fr;
  column-gap: 2rem;
  align-items: center;
  padding: 0 2.4rem;
  border-bottom: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
`;

const OrderNo = styled.div`
  font-family: "Sono";
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--color-grey-700);
`;

const Stacked = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 1.2rem;
  }
`;

const Amount = styled.div`
  font-family: "Sono";
  font-weight: 500;
`;

const descriptionMap = {
  created: "blue",
  confirmed: "green",
  checked_in: "indigo",
  checked_out: "silver",
  cancelled: "red",
};

const statusMap = {
  pending: { label: "待处理", color: "blue" },
  confirmed: { label: "已确认", color: "green" },
  completed: { label: "已完成", color: "silver" },
  cancelled: { label: "已取消", color: "red" },
};

const actionLabelMap = {
  created: "创建订单",
  confirmed: "确认订单",
  checked_in: "办理入住",
  checked_out: "完成退房",
  cancelled: "取消订单",
};

function OrderRow({ index, style, orders, ariaAttributes }) {
  const order = orders[index];
  const status = statusMap[order.status];

  return (
    <Row style={style} {...ariaAttributes}>
      <OrderNo>#{order.order_no}</OrderNo>

      <Stacked>
        <span>{order.guest_name}</span>
        <span>{formatDateTime(order.created_at)}</span>
      </Stacked>

      <div>{order.operator_name}</div>

      <Tag type={descriptionMap[order.action_type]}>
        {actionLabelMap[order.action_type]}
      </Tag>

      <Stacked>
        <Tag type={status.color}>{status.label}</Tag>
        <Amount>{formatCurrency(order.amount)}</Amount>
      </Stacked>

      <div>{order.description}</div>
    </Row>
  );
}

export default OrderRow;
