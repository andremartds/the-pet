import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FindAllPet } from "../../../domain/features/pet/list-pet";

type Props = {
  findAllPet: FindAllPet
}


const PetList: React.FC<Props> = ({ findAllPet }: Props) => {

  const [pets, setPets] = useState<any[]>([])

  useEffect(() => {
    const result = findPets()
    setPets(result)
  }, [])

  function findPets() {
    const { pets } = findAllPet.findAll()
    return pets;
  }

  return (
    <div className="p-4">
      <div className="flex p-4">
        <div className="flex-1">Listagem de Pets</div>
        <Link to={`/form`} className="btn btn-primary">Novo</Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
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

export default PetList;