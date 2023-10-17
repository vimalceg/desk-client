
export default function DepartmentUIRepo(store, id) {

  function setSelectedDepartmentId(departmentId) {
    store.setSelectedDepartment(departmentId);
  }

  function getSelectedDepartmentId() {
    return store.getSelectedDepartmentId();
  }
  return {
    setSelectedDepartmentId,
    getSelectedDepartmentId,
  };
}
