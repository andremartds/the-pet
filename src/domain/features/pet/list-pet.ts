import { Pet } from "../../model/pet";

export interface FindAllPet {
  findAll: () => FindAllPet.Result
}

export namespace FindAllPet {
  export type Result = {
    pets: Pet[]
  }
}