export function getDepartments(state) {
  return state;
}
export function getDepartment(state, id) {
  return state.filter((item) => item.id == id);
}
