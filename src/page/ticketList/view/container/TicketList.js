import React, { useState } from "react";
import { DepartmentContainer } from "../../../../department";
import { TicketListContainer } from "../../../../ticket";
export default function TicketList() {
  let [departmentId, setDepartmentId] = useState();
  return (
    <React.Fragment>
      <DepartmentContainer
        onSelect={(id) => {
          setDepartmentId(id);
        }}
      />
      {departmentId ? (
        <TicketListContainer departmentId={departmentId} />
      ) : (
        <div>Department id not set yet</div>
      )}
    </React.Fragment>
  );
}
