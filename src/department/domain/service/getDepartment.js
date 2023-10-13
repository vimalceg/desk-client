import DepartmentOutputModel from "../model/outputModel/DepartmentOutputModel";

export default function getDepartment(repo) {
  return (id) => DepartmentOutputModel(repo.getDepartment(id));
}
