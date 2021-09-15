import Template from "../../../../presentation/components/common/Template"
import { PetList } from "../../../../presentation/pages"
import { makeFindAllPet, makeRemovePet } from "../../services/pet.factory"

export const makePetList: React.FC = () => {
  return (
    <Template>
      <PetList
        findAllPet={makeFindAllPet()}
        removePet={makeRemovePet()}
      />
    </Template>
  )
}