import { setDepartment } from "./actions";
import { bindActionCreators } from "redux";
import { getDepartments, getDepartment } from "./selectors";

export default function createDepartmentStore(store) {
  return {
    ...store,
    ...bindActionCreators({ setDepartment }, store.dispatch),
    getDepartments: () => getDepartments(store.getState().departments),
    getDepartment: (id) => getDepartment(store.getState().departments, id),
  };
}
