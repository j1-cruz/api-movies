import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 } from 'uuid'
import { Movie, MoviesStatus } from "./movies.entity"
import { UpdateMoviesDto } from './movies.dto';


@Injectable()
export class MoviesService {
    
    //SImulacion de base de datos
    private movies: Movie[] = [
        {
            id:v4(),
            title: 'Fast X ',
            sinopsis: "En muchas misiones y contra probabilidades imposibles, Dom Toretto y su familia han burlado, merecido y superado a todos los enemigos en su camino. Ahora, se enfrentan al oponente más letal que jamás hayan enfrentado: una amenaza aterradora que emerge de las sombras del pasado y que se alimenta de la venganza de sangre, y quién está decidido a destrozar a esta familia y destruir todo — y a todos — que Dom ama, para siempre.",
            reparto: "Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Ludacris, Jason Momoa",
            genero: "Accion",
            fechaLanzamiento: "05/18/2023",
            img:"",
            duracion: "2h 22m",
            status: MoviesStatus.PENDING
        }

    ]

    getAllMovies(){
        return this.movies
    }

    createMovie(title: string, sinopsis: string, reparto: string, genero:string, fechaLanzamiento:string, img:string, duracion:string){
        const movie = {
            id: v4(),
            title,
            sinopsis,
            genero,
            fechaLanzamiento,
            img,
            duracion,
            reparto,
            status: MoviesStatus.PENDING,
        };
        this.movies.push(movie)
    }


    /*
    En ambos casos, se utiliza la función findIndex para buscar la película en el array this.movies. 
    Si el resultado es -1, significa que la película no fue encontrada, por lo que se lanza una excepción 
    NotFoundException con el mensaje de error correspondiente. 
    En caso contrario, se procede con la eliminación o actualización de la película.
    */

    //El metodo delete no hace falta retrnarlo ya que actualiza el array
    deleteMovie(id: string) {
        const movieIndex = this.movies.findIndex(movie => movie.id === id);
        if (movieIndex === -1) {
            throw new NotFoundException('La película no existe');
        }
        this.movies.splice(movieIndex, 1);
    }

    getMovieById(id:string): Movie {
       return this.movies.find(movie => movie.id === id)
    }


    updateMovie(id: string, updateMovies: UpdateMoviesDto): Movie {
        const movie = this.getMovieById(id);
        if (!movie) {
            throw new NotFoundException('La película no existe');
        }
        const newMovie = Object.assign(movie, updateMovies);
        return newMovie;
    }
    
}
