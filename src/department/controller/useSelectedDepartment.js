import { useStore } from 'react-redux';

import usePresenter1 from './usePresenter1';
import createDepartmentUIStore from '../ui-store/redux-store/store';
import DepartmentUIRepo from '../ui-store/DepartmentUIRepo';

export default function useSelectedDepartment(id) {
  let store = useStore();
  let repo = DepartmentUIRepo(createDepartmentUIStore(store, id));
  let { viewModel } = usePresenter1(repo);
  return {
    viewModel,
  };
}
