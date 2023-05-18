//Dependencis
import { IsString, IsNotEmpty, MinLength, IsOptional } from 'class-validator'

import { MoviesStatus } from "./movies.entity"

export class CreateMovieDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    sinopsis: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    reparto: string

    @IsString()
    @IsNotEmpty()
    fechaLanzamiento: string

    @IsString()
    @IsNotEmpty()
    duracion: string

    @IsString()
    @IsNotEmpty()
    img: string

    @IsString()
    @IsNotEmpty()
    genero: string
}

export class UpdateMoviesDto {
    
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    sinopsis?: string
    
    @IsString()
    @IsOptional()
    reparto?: string
    
    @IsString()
    @IsOptional()
    status?: MoviesStatus

    @IsString()
    @IsOptional()
    fechaLanzamiento: string

    @IsString()
    @IsOptional()
    duracion: string

    @IsString()
    @IsOptional()
    img: string

    @IsString()
    @IsOptional()
    genero: string

}