import { Module } from '@nestjs/common';

//Movies
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports: [],
    controllers: [MoviesController],
    providers: [MoviesService],
  })
  export class MoviesModule {}