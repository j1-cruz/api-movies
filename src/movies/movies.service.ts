import { Injectable } from '@nestjs/common';
import { v4 } from 'uuid'
import { Movie, MoviesStatus } from "./movies.entity"
import { UpdateMoviesDto } from './movies.dto';


@Injectable()
export class MoviesService {
    
    //SImulacion de base de datos
    private movies: Movie[] = [
        {
            id:'abc',
            title: 'Avatar',
            description: "Nueva peli",
            reparto: "Actores",
            status: MoviesStatus.PENDING
        }

    ]

    getAllMovies(){
        return this.movies
    }

    createMovie(title: string, description: string, reparto: string){
        const movie = {
            id: v4(),
            title,
            description,
            reparto,
            status: MoviesStatus.PENDING,
        };
        this.movies.push(movie)
    }

    //El metodo delete no hace falta retrnarlo ya que actualiza el array
    deleteMovie(id:string) {
        this.movies = this.movies.filter(movie => movie.id !== id)
    }


    getMovieById(id:string): Movie {
       return this.movies.find(movie => movie.id === id)
    }


    updateMovie(id:string, updateMovies:UpdateMoviesDto): Movie{
        const movie = this.getMovieById(id)
        const newMovie = Object.assign(movie, updateMovies)
        this.movies.map(movie => movie.id === id ? newMovie : movie)
        return newMovie
    }
    
}
