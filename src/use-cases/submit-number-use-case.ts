import { NumbersRepository }  from '../repositories/numbers-repository'

interface SubmitNumberUseCaseRequest {
  number: string;
}

export class SubmitNumberUseCase {
  constructor(
    private NumbersRepository: NumbersRepository,
  ) {}

  async execute(request: SubmitNumberUseCaseRequest) {
    const { number } = request;

    if (!number) {
      throw new Error('Number is required');
    }
    
    return await this.NumbersRepository.create({
      number
    })   
  }
}