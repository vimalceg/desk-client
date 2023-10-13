import Department from "../domain/entity/Department";

export default function DepartmentRepository(store) {
  function getDepartments() {
    let departments = store.getDepartments();
    return departments.map((department) => {
      let departmentEntity = Department();
      departmentEntity.setName(department.name);
      departmentEntity.setId(department.id);
      return departmentEntity;
    });
  }
  function getDepartment(id) {
    let departmentEntity = Department();
    let departmentDataObject = store.getDepartments(id);
    departmentEntity.setName(departmentDataObject.name);
    departmentEntity.setId(departmentDataObject.id);
    return departmentEntity;
  }
  return {
    getDepartments,
    getDepartment,
  };
}
