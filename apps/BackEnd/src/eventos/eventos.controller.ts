import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { Evento } from 'core';
import { Data } from 'core';
import { Convidado } from 'core/src/evento';
import { EventoPrisma } from './evento.prisma';

import { Senha } from 'core';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventoPrisma: EventoPrisma) {}

  @Get('validar/:alias')
  async validarAlias(@Param('alias') alias: string) {
    const evento = await this.eventoPrisma.buscarPorAlias(alias);
    return evento ? false : true;
  }

  @Get('/all')
  async buscarEventos() {
    return await this.eventoPrisma.buscarTodos();
  }

  @Post('/:alias/convidado')
  async salvarConvidado(
    @Param('alias') alias: string,
    @Body() convidado: Convidado,
  ) {
    const evento = await this.eventoPrisma.buscarPorAlias(alias);
    if (!evento) {
      throw new HttpException('Evento não encontrado', HttpStatus.NOT_FOUND);
    }
    return await this.eventoPrisma.salvarConvidado(evento, convidado);
  }

  // procura eventos por id ou pro alias
  @Get('/:idoralias')
  async buscarEventosPorAlias(@Param('idoralias') idoralias: string) {
    let evento = await this.eventoPrisma.buscarPorAlias(idoralias);
    if (!evento) {
      evento = await this.eventoPrisma.buscarPorId(idoralias);
      console.log(evento);

      if (!evento) {
        throw new HttpException('Evento não encontrado', HttpStatus.NOT_FOUND);
      }
    }

    return evento;
  }

  @Post('')
  async salvarEvento(@Body() evento: Evento) {
    const existe = await this.eventoPrisma.buscarPorAlias(evento.alias);
    if (existe && existe.id !== evento.id) {
      throw new HttpException('Evento já existente', HttpStatus.CONFLICT);
    }
    evento = {
      alias: evento.alias,
      nome: evento.nome,
      data: evento.data,
      local: evento.local,
      senha: Senha.nova(),
      descricao: evento.descricao,
      imagem: evento.imagem,
      imagembackground:evento.imagemBackground,
      publicoEsperado: evento.publicoEsperado,
    };
    console.log(evento)
    return await this.eventoPrisma.salvarEvento(evento);
  }

  @Post('/acessar')
  async acessarEvento(@Body() dados: { id: string; senha: string }) {
    const evento = await this.eventoPrisma.buscarPorId(dados.id);
    if (!evento || dados.senha !== evento.senha) {
      throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED);
    }
    return evento;
  }

  private serializar(evento: Evento) {
    return {
      ...evento,
      data: Data.formatar(evento.data),
    };
  }
  //   private desformatar(evento:Evento) {

  //     return {
  //         ...evento,
  //         data: Data.desformatar(evento.data),
  //     }
  //   }
}
