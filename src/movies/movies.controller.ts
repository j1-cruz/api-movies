import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto, UpdateMoviesDto } from './movies.dto';


@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService){}

    @Get()
    getMovies() {
        return this.moviesService.getAllMovies();
      }

    @Post()  
    createMovie(@Body() newMovie: CreateMovieDto){
      return this.moviesService.createMovie (
        newMovie.title, 
        newMovie.sinopsis, 
        newMovie.reparto,
        newMovie.duracion,
        newMovie.img,
        newMovie.fechaLanzamiento,
        newMovie.genero
      )
    }

    @Delete(':id')
    deleteMovie(@Param('id') id:string){
      this.moviesService.deleteMovie(id)
    }

    @Patch(':id')
    updateMovies(@Param("id") id: string, @Body() updateMovies: UpdateMoviesDto){
      this.moviesService.updateMovie(id, updateMovies)

    }

}
