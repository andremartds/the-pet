import Template from "../../../../presentation/components/common/Template"
import PetForm from "../../../../presentation/pages/pet-form/pet-form"
import { makeCreatePet } from "../../services/pet.factory"


export const makePetForm: React.FC = () => {

  return (
    <Template>
      <PetForm
        createPetService={makeCreatePet()}
      />
    </Template>

  )
}