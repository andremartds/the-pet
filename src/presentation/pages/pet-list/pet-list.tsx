import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FindAllPet } from "../../../domain/features/pet/list-pet";
import { RemovePet } from "../../../domain/features/pet/remove-pet";

type Props = {
  findAllPet: FindAllPet;
  removePet: RemovePet;
};

const PetList: React.FC<Props> = ({ findAllPet, removePet }: Props) => {
  const [pets, setPets] = useState<any[]>([]);

  useEffect(() => {
    findPets();
  }, []);

  function findPets() {
    const { pets } = findAllPet.findAll();
    return setPets(pets)
  }

  function handleRemove(id: string) {
    removePet.execute({ id });
    findPets();
  }

  return (
    <div className="p-4">
      <div className="flex p-4">
        <div className="flex-1">Listagem de Pets</div>
        <Link to={`/form`} className="btn btn-primary">
          Novo
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Customer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pets && pets.length > 0 ? (
              pets.map(item => (
                <tr>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.customerName}</td>
                  <td>
                    <button
                      onClick={() => handleRemove(item.id)}
                      className="btn btn-circle btn-xs md:btn-sm lg:btn-md xl:btn-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-4 h-4 stroke-current md:w-6 md:h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Nenhum</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PetList;
