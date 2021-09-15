import { CreatePet } from "../../../domain/features/pet/create-pet";
import { PetRepository } from "../../contracts/repo/pet";

export class CreatePetService implements CreatePet {

  constructor(
    private readonly petRepository: PetRepository
  ) {}

  async execute(params: CreatePet.params): Promise<CreatePet.Result>  {
    return this.petRepository.create(params);
  }
}