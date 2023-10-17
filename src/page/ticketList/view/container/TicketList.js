import React, { useState } from 'react';
import { DepartmentContainer } from '../../../../department';
import { TicketListContainer } from '../../../../ticket';
import useTicketList from '../../application/useTicketList';
export default function TicketList() {
  let { departmentId } = useTicketList();
  return (
    <React.Fragment>
      <DepartmentContainer id="selectedDepartmentId" />
      <DepartmentContainer id="selectedDepartmentId1" />
      {departmentId ? (
        <TicketListContainer departmentId={departmentId} />
      ) : (
        <div>Department id not set yet</div>
      )}
    </React.Fragment>
  );
}
