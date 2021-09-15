import Template from "../../../../presentation/components/common/Template"
import { PetList } from "../../../../presentation/pages"
import { makeFindAllPet } from "../../services/pet.factory"

export const makePetList: React.FC = () => {
  return (
    <Template>
      <PetList
        findAllPet={makeFindAllPet()}
      />
    </Template>
  )
}