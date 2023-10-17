import { useSelector } from "react-redux";
import selectedDepartmentViewModel from "./selectedDepartmentViewModel";

export default function usePresenter1(repo) {
  let viewModel = useSelector(() => {
    return selectedDepartmentViewModel({
      departmentId: repo.getSelectedDepartmentId(),
    });
  });
  return { viewModel };
}
