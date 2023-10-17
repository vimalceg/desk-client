import { getSelectedDepartmentId } from './selectors';
import { bindActionCreators } from 'redux';
import { setSelectedDepartment } from './actions';
import reducer from './reducer';
import { bindActionCreatorWithId } from '@zohodesk/redux-modules';

export default (store, id) => {
  store.injectReducer(id, reducer);

  return {
    ...store,
    ...bindActionCreators(
      {
        setSelectedDepartment: (args) => {
          return bindActionCreatorWithId({ setSelectedDepartment }, id, args);
        },
      },
      store.dispatch
    ),
    getSelectedDepartmentId: () =>
      getSelectedDepartmentId(store.getState()[id]),
  };
};
