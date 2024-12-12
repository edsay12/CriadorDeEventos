import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaProvider  extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  } 

  onmoduleDestroy() {
    this.$disconnect();
  }
}