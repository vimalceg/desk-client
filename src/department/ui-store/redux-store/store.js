import { getSelectedDepartmentId } from './selectors';
import { bindActionCreators } from 'redux';
import { setSelectedDepartment } from './actions';
import reducer from './reducer';
import { filterAppReducer } from '@zohodesk/redux-modules';

function appendIdInActionObject(actionObj, _id) {
  if (_id) {
    return { ...actionObj, _id };
  }
  return actionObj;
}

function bindActionCreatorWithId(actionCreator, _id, args) {
  const action = actionCreator.apply(null, args);
  const actionWithId = appendIdInActionObject(action, _id);
  return actionWithId;
}

export default (store, id) => {
  store.injectReducer(id, filterAppReducer(reducer, id));
  return {
    ...store,
    ...bindActionCreators(
      {
        setSelectedDepartment: (...args) => {
          console.log('id', id);
          return bindActionCreatorWithId(setSelectedDepartment, id, args);
        },
      },
      store.dispatch
    ),
    getSelectedDepartmentId: () =>
      getSelectedDepartmentId(store.getState()[id]),
  };
};
