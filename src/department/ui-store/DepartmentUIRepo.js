export default function DepartmentUIRepo(store) {
  function setSelectedDepartmentId(departmentId ) {
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
