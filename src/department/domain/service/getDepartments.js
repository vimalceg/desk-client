import DepartmentOutputModel from "../model/outputModel/DepartmentOutputModel";

export default function getDepartments(repo) {
  return () => DepartmentOutputModel(repo.getDepartments());
}
