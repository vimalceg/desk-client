import useDepartment from "../../controller/useDepartment";
import department from "../../data-store/redux-store/reducer";

export default function DepartmentContainer() {
  let { departments, selectedDepartmentId } = useDepartment();
  return (
    <div>
      <div>Selected Department: {selectedDepartmentId}</div>
      {departments.map((department) => {
        let { name, onSelect } = department;
        return <div onClick={onSelect}>{name}</div>;
      })}
    </div>
  );
}
