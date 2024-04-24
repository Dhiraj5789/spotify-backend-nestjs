import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

@Module({
  controllers: [SongsController],
  // providers: [SongsService], :: Standard Provider
  providers: [{ provide: SongsService, useClass: SongsService }], // Class Provider
  // nest creates instance of the service caches it and returns it
})
export class SongsModule {}
