import { NumberCreateData, NumbersRepository } from "../numbers-repository";
import { prisma } from '../../prisma';

export class PrismaNumbersRepository implements NumbersRepository {
  async create ({ number }: NumberCreateData) {
    await prisma.number.create({
      data: {
      number
      }
    })
  }
}