import styled from "styled-components";
import Empty from "../../ui/Empty";
import Spinner from "../../ui/Spinner";
import VirtualizedList from "../../ui/VirtualizedList";
import { useOrders } from "./useOrders";
import OrderRow from "./OrderRow";

const Header = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1.1fr 1fr 1fr 1fr 2fr;
  column-gap: 2rem;
  align-items: center;
  padding: 1.6rem 2.4rem;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  font-size: 1.3rem;
  color: var(--color-grey-600);
`;

function OrdersList() {
  const { isLoading, orders } = useOrders();

  if (isLoading) return <Spinner />;

  if (!orders.length) return <Empty resourceName="订单流水" />;

  return (
    <VirtualizedList
      height={640}
      rowCount={orders.length}
      rowHeight={72}
      rowComponent={OrderRow}
      rowProps={{ orders }}
      header={
        <Header>
          <div>订单号</div>
          <div>住客 / 时间</div>
          <div>处理人</div>
          <div>动作</div>
          <div>状态 / 金额</div>
          <div>说明</div>
        </Header>
      }
    />
  );
}

export default OrdersList;
