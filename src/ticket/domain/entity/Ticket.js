export default function Ticket(){
    let id;
    let subject;
    let number;
    function getId(){
        return id;
    }
    function getSubject(){
        return subject
    }
    function getTicketNumber(){
        return ticketNumber
    }
    function setSubject(s){
        subject=s;
    }
    function setNumber(n){
        number=n;
    }
    function setId(idLocal){
        id=idLocal
    }
    function getObject(){
        return {
            id,
            number,
            subject
        }
    }
    return {
        getId,
        getSubject,
        getTicketNumber,
        setSubject,
        setNumber,
        setId,
        getObject
    } 
}