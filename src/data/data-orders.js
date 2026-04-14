import { add } from "date-fns";
import { guests } from "./data-guests";

const operators = ["前台-Alice", "前台-Bob", "夜班-Chen", "系统", "值班经理-Liu"];

const actionTypes = ["created", "confirmed", "checked_in", "checked_out", "cancelled"];

const descriptions = {
  created: "新订单已创建，等待后续处理",
  confirmed: "订单已确认并通知住客",
  checked_in: "住客已完成入住登记",
  checked_out: "住客已完成退房结算",
  cancelled: "订单已取消并完成状态同步",
};

function toISOStringWithOffset(daysOffset, hourOffset) {
  return add(new Date(), { days: daysOffset, hours: hourOffset }).toISOString();
}

function getActionType(index) {
  return actionTypes[index % actionTypes.length];
}

function getStatus(actionType) {
  if (actionType === "created") return "pending";
  if (actionType === "confirmed") return "confirmed";
  if (actionType === "checked_in" || actionType === "checked_out") return "completed";
  return "cancelled";
}

function getAmount(index) {
  return 680 + (index % 12) * 180 + Math.floor(index / 9) % 5 * 90;
}

export function generateOrders(count = 2000) {
  return Array.from({ length: count }, (_, index) => {
    const guest = guests[index % guests.length];
    const actionType = getActionType(index);
    const status = getStatus(actionType);
    const createdAt = toISOStringWithOffset(-Math.floor(index / 8), -(index % 24));

    return {
      created_at: createdAt,
      order_no: 202604130001 + index,
      guest_name: guest.fullName,
      operator_name: operators[index % operators.length],
      action_type: actionType,
      status,
      amount: getAmount(index),
      description: descriptions[actionType],
    };
  });
}
