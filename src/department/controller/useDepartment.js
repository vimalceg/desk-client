import { useState } from 'react';

import createDepartmentStore from '../data-store/redux-store/store';
import DepartmentRepository from '../data-store/DepartmentRepository';
import DepartmentService from '../domain/service/DepartmentService';

import createDepartmentUIStore from '../ui-store/redux-store/store';
import DepartmentUIRepo from '../ui-store/DepartmentUIRepo';

import { useStore } from 'react-redux';
import usePresenter from './usePresenter';

export default function useDepartment({ onSelect, id }) {
  let store = useStore();
  // let [id, setId] = useState(null);
  let departmentRepo = DepartmentRepository(createDepartmentStore(store));
  let departmentService = DepartmentService(departmentRepo);
  let repo = DepartmentUIRepo(createDepartmentUIStore(store, id));
  let { viewModel } = usePresenter(
    departmentService,
    repo
    //   {
    //   id,
    //   onSelect: (id) => {
    //     // viewModel.id
    //     setId(id);
    //     onSelect(id);
    //   },
    // }
  );
  return {
    ...viewModel,
  };
}

// import { useStore } from "react-redux";
// import createTicketListPageUIStore from "../ui-store/redux-store/store";

// import TicektListPageRepo from "../ui-store/TicketListPageRepo";
// import usePresenter from "./usePresenter";

// export default function useTicketList() {
//   let store = useStore();
//   let repo = TicektListPageRepo(createTicketListPageUIStore(store));
//   let { viewModel } = usePresenter(repo);
//   return {
//     ...viewModel,
//   };
// }
