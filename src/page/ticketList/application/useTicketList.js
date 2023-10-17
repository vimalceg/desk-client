import { useStore } from 'react-redux';

import useSelectedDepartment from '../../../department/controller/useSelectedDepartment';

export default function useTicketList() {
  let { viewModel } = useSelectedDepartment();
  console.log('useTicketList,viewModel', viewModel);
  return {
    ...viewModel,
  };
}
