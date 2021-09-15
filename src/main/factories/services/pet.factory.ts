import { CreatePetService } from "../../../data/services/pet/create-pet";
import { ListPet } from "../../../data/services/pet/list-pet";
import { RemovePetService } from "../../../data/services/pet/remove-pet";
import { MemoryPetRepository } from "../../../infrastructure/memory/memory-pet.repository";

const petRepo = new MemoryPetRepository();


export const makeFindAllPet = () => {
  return new ListPet(petRepo);
}

export const makeCreatePet = () => {
  return new CreatePetService(petRepo)
}

export const makeRemovePet = () => {
  return new RemovePetService(petRepo);
}