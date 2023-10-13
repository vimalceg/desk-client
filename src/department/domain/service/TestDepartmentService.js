import departmentRepo from "../../data-store/TestDepartmentRepo";
import DepartmentService from "./DepartmentService";

let departmentService = DepartmentService(departmentRepo);
export default departmentService;
global.departmentService = departmentService;
