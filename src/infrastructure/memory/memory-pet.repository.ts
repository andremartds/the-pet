import { CreatePetRepo, FindAllPetRepo } from "../../data/contracts/repo/pet";
import { pets } from '../db/db';
import { v4 } from 'uuid'

export class MemoryPetRepository implements CreatePetRepo, FindAllPetRepo {
  find() {
    return {
      pets
    }
  }
  create (params: CreatePetRepo.Params): CreatePetRepo.Result {
    const id = v4()
    const petData = {
      id,
      ...params
    }

    pets.push(petData)

    return {
      id,
      ...params
    }
  }
}