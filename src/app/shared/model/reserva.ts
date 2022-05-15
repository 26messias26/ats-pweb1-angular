export class Reserva{
    id?:string ;
    nome?: string;
    cpf?: string; 
    mesa?: string;
    horario?: string;
    data?: string;

    constructor(id?:string,reserva:Reserva={}){
        this.id = id;
        this.nome = reserva.nome;
        this.cpf = reserva.cpf;
        this.mesa = reserva.mesa;
        this.horario = reserva.horario;
        this.data = reserva.data;
    }

}