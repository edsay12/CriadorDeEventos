import { PrismaClient } from '@prisma/client';

import { eventos } from 'core/src/constants/eventos';

async function seed() {
  const prisma = new PrismaClient();
  eventos.forEach(async (evento) => {
    await prisma.evento.create({
      data: {
        alias: evento.alias,
        nome: evento.nome,
        senha: evento.senha,
        data: evento.data,
        local: evento.local,
        descricao: evento.descricao,
        imagem: evento.imagem,
        imagembackground: evento.imagemBackground,
        publicoEsperado: evento.publicoEsperado,
        convidados:{
            create: evento.convidados.map(convidado => ({
                nome: convidado.nome,
                email: convidado.email,
                confirmado: convidado.confirmado,
                possuiAcompanhante: convidado.possuiAcompanhantes,
                qtdeAcompanhantes: convidado.qtdeAcompanhantes,
            }))
        }
      }
    });
  });
}

seed();
