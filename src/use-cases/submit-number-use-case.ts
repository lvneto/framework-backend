import { NumberCreateData, NumbersRepository }  from '../repositories/numbers-repository'
interface SubmitNumberUseCaseRequest {
  number: string;
}
export class SubmitNumberUseCase {
  constructor(
    private NumbersRepository: NumbersRepository,
  ) {}

  async execute(request: SubmitNumberUseCaseRequest) : Promise<NumberCreateData>{
    let { number } = request;

    let result = {
      number,
      dividers: [],
      primeDividers: []
    } as any
    
    if (!number) {
      throw new Error('Number is required');
    }
    
    await this.NumbersRepository.create({
      number
    })      

    result.number = parseInt(number)
    result.dividers = await this.findDividers(result.number)
    result.primeDividers = await this.findPrimeDividers(result.number)

    return result
  }

  async findDividers (number: number) {    
    const dividersList = []

    for (let divider = 1; divider <= number; divider++) {
      if (number % divider === 0) {
          dividersList.push(divider)
      }
    }
    return dividersList
  }

  async findPrimeDividers (number: number) {
    const primeDividerList = []

    for (let divider = 1; divider <= number / 2; divider ++) {
      if (number % divider) {
        primeDividerList.push(divider)
      }
    }
   
    return primeDividerList
  }
}