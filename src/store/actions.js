export const ADD_EXPENSE = "ADD EXPENSE";
export const DELETE_EXPENSE = "DELETE EXPENSE";
export const RESET_EXPENSE = "RESET EXPENSE";

export function add_expense(value) {
  return { type: ADD_EXPENSE, payload: value };
}

export function delete_expense(id) {
  return { type: DELETE_EXPENSE, payload: id };
}

export function reset_expense() {
  return { type: RESET_EXPENSE };
}
