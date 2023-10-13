import { useSelector } from "react-redux";
import departmentViewModel from "./departmentViewModel";

export default function usePresenter(departmentService, uiService) {
  let viewModel = useSelector(() => {
    let departments = departmentService.getDepartments();
    let departmentsObject = departments.map((department) => {
      return department.getObject();
    });
    return {
      ...departmentViewModel(departmentsObject, uiService),
    };
  });
  return {
    viewModel,
  };
}
