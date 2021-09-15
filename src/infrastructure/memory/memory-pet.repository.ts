import {
  CreatePetRepo,
  FindAllPetRepo,
  RemovePetRepo,
} from "../../data/contracts/repo/pet";
import { v4 } from "uuid";

export let pets: any[] = [
  {
    id: "sadsad-asdsad-sdsa",
    name: "Dog 1",
    breed: "teste",
    kind: "dog",
    customerName: "Petrick",
  },
  {
    id: "sadsad-asdsad-sds2a",
    name: "Dog 1",
    breed: "teste",
    kind: "dog",
    customerName: "Petrick",
  },
];

export class MemoryPetRepository
  implements CreatePetRepo, FindAllPetRepo, RemovePetRepo
{
  find() {
    return {
      pets,
    };
  }
  create(params: CreatePetRepo.Params): CreatePetRepo.Result {
    const id = v4();
    const petData = {
      id,
      ...params,
    };

    pets.push(petData);

    return {
      id,
      ...params,
    };
  }

  remove(id: string): boolean {
    const idExcluded = (p: any) => id !== p.id;
    const newPets = pets.filter(idExcluded);
    pets = newPets;
    console.log(pets)
    return true;
  }
}
