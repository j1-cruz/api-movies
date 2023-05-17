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
        newMovie.description, 
        newMovie.reparto
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
