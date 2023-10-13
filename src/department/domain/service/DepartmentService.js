import getDepartment from "./getDepartment";
import getDepartments from "./getDepartments";

export default function DepartmentService(repo) {
  return {
    getDepartment: getDepartment(repo),
    getDepartments: getDepartments(repo),
  };
}
