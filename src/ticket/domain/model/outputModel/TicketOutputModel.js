export default function TicketOutputModel(tickets){
    return tickets.map(ticket=>ticket.getObject())
}