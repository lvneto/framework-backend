
import express from 'express';
import { PrismaNumbersRepository } from './repositories/prisma/prisma-numbers-repository';
import { SubmitNumberUseCase } from './use-cases/submit-number-use-case';


export const routes = express.Router();

routes.post('/:number', async (req, res) => {
  const { number } = req.params;
  
  const prismaNumbersRepository = new PrismaNumbersRepository();

  const submitNumberUseCase = new SubmitNumberUseCase(
    prismaNumbersRepository,
  )

  await submitNumberUseCase.execute({
    number,
  })


  return res.status(201).send();
})