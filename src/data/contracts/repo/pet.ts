import { Pet } from "../../../domain/model/pet"

export interface CreatePetRepo {
  create: (params: CreatePetRepo.Params) => CreatePetRepo.Result
}

export interface FindAllPetRepo {
  find: () => FindAllRepo.Result
}

export type PetRepository = CreatePetRepo & FindAllPetRepo

export namespace CreatePetRepo {
  export type Params = {
    name: string;
    breed: string;
    kind: string;
    custumerName: string
  }

  export type Result = {
    id: string;
    name: string;
    breed: string;
    kind: string;
    custumerName: string
  }
}

export namespace FindAllRepo {
  export type Result = {
    pets: Pet[]
  }
}