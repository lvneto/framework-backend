
import express from 'express';
import { PrismaNumbersRepository } from './repositories/prisma/prisma-numbers-repository';
import { SubmitNumberUseCase } from './use-cases/submit-number-use-case';

export const routes = express.Router();

routes.post('/v1/:number', async (req, res) => {
  const { number } = req.params;
  
  const prismaNumbersRepository = new PrismaNumbersRepository();

  const submitNumberUseCase = new SubmitNumberUseCase(
    prismaNumbersRepository,
  )

   const result = await submitNumberUseCase.execute({
    number,
  })
  
  return res.status(201).send({ data: result});
})