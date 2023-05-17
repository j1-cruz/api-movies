export enum MoviesStatus {
    PENDING = 'PENDING',
    IN_PROGRESs = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Movie {
    id: string;
    title: string;
    description:string;
    reparto: string;
    status: MoviesStatus
}