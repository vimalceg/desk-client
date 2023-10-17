import { getSelectedDepartmentId } from "./selectors";
import { bindActionCreators } from "redux";
import { setSelectedDepartment } from "./actions";

export default (store) => ({
  ...store,
  ...bindActionCreators({ setSelectedDepartment }, store.dispatch),
  getSelectedDepartmentId: () =>
    getSelectedDepartmentId(store.getState().selectedDepartmentId),
});
