import { useStore } from "react-redux";

import usePresenter1 from "./usePresenter1";
import createDepartmentUIStore from "../ui-store/redux-store/store";
import DepartmentUIRepo from "../ui-store/DepartmentUIRepo";

export default function useSelectedDepartment() {
  let store = useStore();
  let repo = DepartmentUIRepo(createDepartmentUIStore(store));
  let { viewModel } = usePresenter1(repo);
  return {
    ...viewModel,
  };
}
