import { Injectable } from '@nestjs/common';

import { PrismaProvider } from 'src/db/prisma.provider';
import { Evento } from 'core';
import { Convidado } from 'core/src/evento';

@Injectable()
export class EventoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async salvarEvento(evento: Evento) {
    return await this.prisma.evento.create({
      data: evento,
    });
  }

  async salvarConvidado(evento: Evento, convidado: Convidado) {
    return await this.prisma.convidado.create({
      data: {
        ...convidado,
        qtdeAcompanhantes: +(convidado.qtdeAcompanhantes ?? 0),
        possuiAcompanhante: convidado.possuiAcompanhante ?? false,
        evento: {
          connect: {
            id: evento.id,
          },
        },
      },
    });
  }

  async buscarTodos() {
    return await this.prisma.evento.findMany();
  }

  async buscarPorId(id: string, completo: boolean = false) {
    return await this.prisma.evento.findUnique({
      where: {
        id: id,
      },

      include: {
        convidados: completo,
      },
    });
  }

  async buscarPorAlias(alias: string, completo: boolean = false) {
    return await this.prisma.evento.findUnique({
      where: {
        alias: alias,
      },
      select: {
        id: true,
        alias: true,
        nome: true,
        senha: completo,
        data: true,
        local: true,
        descricao: true,
        imagem: true,
        imagembackground: true,
        publicoEsperado: true,
        convidados: completo,
      },
    });
  }
}
