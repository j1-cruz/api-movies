export enum MoviesStatus {
    PENDING = 'PENDING',
    IN_PROGRESs = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Movie {
    id: string;
    title: string;
    reparto: string;
    genero: string;
    sinopsis: string;
    duracion: string;
    img: string;
    fechaLanzamiento: string;
    status: MoviesStatus
}