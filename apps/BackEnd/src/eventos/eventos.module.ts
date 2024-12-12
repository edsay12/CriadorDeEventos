import { Module } from '@nestjs/common';
import { EventosController } from './eventos.controller';
import { DbModule } from 'src/db/db.module';
import { EventoPrisma } from './evento.prisma';

@Module({
  controllers: [EventosController],
  imports: [DbModule],
  providers: [EventoPrisma],
  exports: [EventoPrisma],
})
export class EventosModule {}
