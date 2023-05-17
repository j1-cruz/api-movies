export class Movies {
    name:string;
    reparto:string;
    id:number;
    año: number;

    constructor(id : number, name: string,  reparto: string){
        this.id= id;
        this.name = name;
        this.reparto = reparto;

    }
}