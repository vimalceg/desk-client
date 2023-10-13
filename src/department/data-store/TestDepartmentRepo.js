import createDepartmentStore from "./redux-store/store";
import DepartmentRepository from "./DepartmentRepository";

let departmentRepo = DepartmentRepository(createDepartmentStore(store));
export default departmentRepo;
global.departmentRepo = departmentRepo;
