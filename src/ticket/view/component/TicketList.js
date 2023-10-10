import React from "react";

export default function TicketList({ tickets }) {
  return (
    <div>
      {tickets.map((ticket) => {
        return (
          <div>
            {ticket.id} .{ticket.number} .{ticket.subject}
          </div>
        );
      })}
    </div>
  );
}
