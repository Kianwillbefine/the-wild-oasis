import supabase from "./supabase";

export async function getOrders({ filter, sortBy }) {
  let query = supabase
    .from("orders")
    .select(
      "id, created_at, order_no, guest_name, operator_name, action_type, status, amount, description"
    );

  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  if (sortBy) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });
  }

  const { data, error } = await query;

  if (error) {
    console.error(error);
    throw new Error("Orders could not be loaded");
  }

  return data;
}
