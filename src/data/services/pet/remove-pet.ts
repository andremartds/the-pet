import { RemovePet } from "../../../domain/features/pet/remove-pet";
import { PetRepository } from "../../contracts/repo/pet";

export class RemovePetService implements RemovePet {
  constructor(private readonly petRepository: PetRepository) {}

  async execute({ id }: RemovePet.params): Promise<RemovePet.Result> {
    const response = await this.petRepository.remove(id);
    return { response };
  }
}
