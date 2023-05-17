import { MoviesStatus } from "./movies.entity"

export class CreateMovieDto {
    title: string
    description: string
    reparto: string
}

export class UpdateMoviesDto {
    title?: string
    description?: string
    reparto?: string
    status?: MoviesStatus
}