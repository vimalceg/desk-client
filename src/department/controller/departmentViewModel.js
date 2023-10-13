export default function departmentViewModel(departments, { onSelect, id }) {
  return {
    departments: departments.map((department) => {
      return {
        ...department,
        onSelect: () => onSelect(department.id),
      };
    }),
    selectedDepartmentId: id,
  };
}
