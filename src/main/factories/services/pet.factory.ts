import { CreatePetService } from "../../../data/services/pet/create-pet";
import { ListPet } from "../../../data/services/pet/list-pet";
import { MemoryPetRepository } from "../../../infrastructure/memory/memory-pet.repository";

const petRepo = new MemoryPetRepository();


export const makeFindAllPet = () => {
  return new ListPet(petRepo);
}

export const makeCreatePet = () => {
  return new CreatePetService(petRepo)
}