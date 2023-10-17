export default function departmentViewModel(departments, repo) {
  return {
    departments: departments.map((department) => {
      return {
        ...department,
        onSelect: () => repo.setSelectedDepartmentId(department.id),
      };
    }),
    selectedDepartmentId: repo.getSelectedDepartmentId(),
  };
}
