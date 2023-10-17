import { useStore } from 'react-redux';

import useSelectedDepartment from '../../../department/controller/useSelectedDepartment';

export default function useTicketList(id) {
  let { viewModel } = useSelectedDepartment(id);
  return {
    ...viewModel,
  };
}
