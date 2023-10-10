import getTickets from './getTickets';

export default function TicketService(repo){
    return {
        getTickets:getTickets(repo)
    }
}