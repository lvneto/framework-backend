import { SubmitNumberUseCase } from "./submit-number-use-case";

const createNumberspy = jest.fn();

const submitNumber = new SubmitNumberUseCase(
  { create: createNumberspy }, 
)

describe('Submit number', () => {
  it('should be able to submit a number', async () => { 

    await expect(submitNumber.execute({
      number: '1',
    })).resolves.not.toThrow();

    expect(createNumberspy).toHaveBeenCalled();
  });

  it('should not be able to submit number without number', async () => { 

    await expect(submitNumber.execute({
      number: '',
    })).rejects.toThrow();
  });
});