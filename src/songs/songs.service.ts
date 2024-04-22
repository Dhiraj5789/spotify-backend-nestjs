import { Injectable } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  // local db
  // local array

  private readonly songs = [];

  create(song: CreateSongDTO) {
    // save the song in the db
    this.songs.push(song);
  }
  findAll() {
    // fetch songs from the db
    // error while fetching the data from db
    throw new Error('Error while fetching from the db');
    return this.songs;
  }
}
