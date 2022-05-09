export interface NumberCreateData {
  number: string;
}

export interface NumbersRepository {
  create: (data: NumberCreateData) => Promise<void>;
}