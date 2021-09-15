import React from "react";
import { Link } from "react-router-dom";
import { CreatePet } from "../../../domain/features/pet/create-pet";

interface Props {
  createPetService: CreatePet,
}

export const PetForm: React.FC<Props> = ({ createPetService }: Props) => {
  return (
    <div className="p-4">
      <div className="flex p-4">
        <div className="flex-1">Listagem de Pets</div>
        <Link to={`/`} className="btn btn-primary">Voltar</Link>
      </div>
      <form>
        <div className="p-4 card ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Cliente Responsável</span>
            </label>
            <input type="text" placeholder="username" className="input"></input>
          </div>
        </div>

        <div className="p-4 card ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Nome do Bixinho</span>
            </label>
            <input type="text" placeholder="username" className="input"></input>
          </div>
        </div>

        <div className="p-4">
          <button className="btn btn-secondary">
            Enviar
          </button>
        </div>

      </form>
    </div>
  )
}


export default PetForm;