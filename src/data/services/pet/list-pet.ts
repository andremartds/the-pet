import { FindAllPet } from "../../../domain/features/pet/list-pet";
import { FindAllPetRepo } from "../../contracts/repo/pet";

export class ListPet implements FindAllPet {

  constructor(
    private readonly findAllPetRepo: FindAllPetRepo
  ) {}

  findAll(): FindAllPet.Result {
    const result = this.findAllPetRepo.find()
    return result;
  }

}