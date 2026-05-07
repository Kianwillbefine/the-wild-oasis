import Heading from "../ui/Heading";
import Row from "../ui/Row";
import OrdersList from "../features/orders/OrdersList";
import OrdersOperations from "../features/orders/OrdersOperations";

function Orders() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">订单</Heading>
        <OrdersOperations />
      </Row>

      <OrdersList />
    </>
  );
}

export default Orders;
