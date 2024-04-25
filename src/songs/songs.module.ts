import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connection';

// const mockSongsService = {
//   findAll() {
//     return [{ id: 1, title: 'Stayin Alive', artists: ['BeeGees'] }];
//   },
// };

@Module({
  controllers: [SongsController],
  // providers: [SongsService], :: Standard Provider
  providers: [
    { provide: SongsService, useClass: SongsService },
    { provide: 'CONNECTION', useValue: connection },
  ], // Class Provider
  // nest creates instance of the service caches it and returns it
  // providers: [{ provide: SongsService, useValue: mockSongsService }],
  // providers: [{ provide: 'CONNECTION', useValue: connection }],
  //useValue: useful for injecting a constant value(mock)
})
export class SongsModule {}
