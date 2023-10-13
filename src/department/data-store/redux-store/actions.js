export function setDepartment(department) {
  return {
    type: "",
    data: {
      department: department.getObject(),
    },
  };
}
