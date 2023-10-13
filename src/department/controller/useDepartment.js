import { useState } from "react";

import createDepartmentStore from "../data-store/redux-store/store";
import DepartmentRepository from "../data-store/DepartmentRepository";
import DepartmentService from "../domain/service/DepartmentService";
import { useStore } from "react-redux";
import usePresenter from "./usePresenter";

export default function useDepartment() {
  let store = useStore();
  let [id, setId] = useState(null);
  let departmentRepo = DepartmentRepository(createDepartmentStore(store));
  let departmentService = DepartmentService(departmentRepo);
  let { viewModel } = usePresenter(departmentService, { id, onSelect: setId });
  return {
    ...viewModel,
  };
}
