import { useEffect, useState } from "react"
import { ListPet } from "../../../../../data/services/pet/list-pet";
import { MemoryPetRepository } from "../../../../memory/memory-pet.repository"

const petListServiceFactory = () => {
  const petRepo = new MemoryPetRepository();
  return new ListPet(petRepo);
}

export const PetList = () => {

  const [pets, setPets] = useState<any[]>([])

  useEffect(() => {
    function findAllPets() {
      return petListServiceFactory().findAll()
    }

    setPets(findAllPets().pets)
  }, [])

  console.log(pets)

  return (
    <div className="p-4">
       <div className="flex flex-row flex-wrap">
        <div className="flex-1"><h2 className="text-xl">Listagem de Pets</h2></div>
        <button className="btn btn-primary">Novo</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>#id</th>
              <th>Name</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            {pets && pets.length > 0 ? pets.map(item => (
              <tr>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.customerName}</td>
              </tr>
            ))

              : <tr>
                <td>Nenhum</td>
              </tr>}

          </tbody>
        </table>
      </div>


    </div>
  )
}