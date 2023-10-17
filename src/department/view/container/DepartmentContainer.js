import React from 'react';
import useDepartment from '../../controller/useDepartment';
import department from '../../data-store/redux-store/reducer';

function DepartmentList({ departments, selectedDepartmentId }) {
  return (
    <div>
      <div>Selected Department1: {selectedDepartmentId}</div>
      {departments.map((department) => {
        let { name, onSelect } = department;
        return <div onClick={onSelect}>{name}</div>;
      })}
    </div>
  );
}

export default function DepartmentContainer({ onSelect, id }) {
  let obj = useDepartment({ onSelect, id });
  return <DepartmentList {...obj} />;
}
