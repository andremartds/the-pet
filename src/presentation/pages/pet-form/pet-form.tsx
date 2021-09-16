import { stat } from "fs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CreatePet } from "../../../domain/features/pet/create-pet";

interface Props {
  createPetService: CreatePet,
}

let errors: string[] = [];

export const PetForm: React.FC<Props> = ({ createPetService }: Props) => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [state, setState] = useState<{
    name: string,
    customerName: string,
    kind: string;
  }>({
    customerName: '',
    name: '',
    kind: '',
  })

  const onSubmit = async (e: any) => {
    e.preventDefault()

    errors = []
    const params = {
      customerName: state.customerName,
      name: state.name,
      kind: state.kind,
    };

    if (params.customerName === '') {
      errors.push('Por favor informar nome do responsável')
   }

    if (params.name === '') {
      errors.push('Por favor informar nome do pt')
    }

    if (params.kind === '') {
      errors.push('Por favor informar tipo de animal')
    }

    if (errors.length > 0) {
      setHasError(true)
    }

    if (errors.length === 0) {
      const result = await createPetService.execute(params)
      if (result) {
        alert('Pet Registrato com sucesso!')
      }
      clearInputs()
    }
  }

  function clearInputs() {
    setState({
      customerName: '',
      name: '',
      kind: '',
    })
  }

  const handleOnChange = (e: any) => {
    console.log(e)
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <div className="p-4">
      <div className="flex p-4">
        <div className="flex-1">Listagem de Pets</div>
        <Link to={`/`} className="btn btn-primary">Voltar</Link>
      </div>

      {errors && errors.length > 0 ?
        errors.map((message) => (
          <div className="alert alert-danger m-1">
            <div className="flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2196f3" className="w-6 h-6 mx-2">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <label>{message}</label>
            </div>
          </div>
        ))
        : ''
      }

      <form onSubmit={onSubmit}>
        <div className="p-4 card">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Cliente Responsável</span>
            </label>
            <input type="text" value={state.customerName} name="customerName" onChange={(e) => handleOnChange(e)} className="input"></input>
          </div>
        </div>

        <div className="p-4 card">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Qual nome do seu PET</span>
            </label>
            <input type="text" value={state.name} name="name" onChange={(e) => handleOnChange(e)} className="input"></input>
          </div>
        </div>

        <div className="p-4 card">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Este Pet é um?</span>
            </label>
            <select name="kind" value={state.kind} onChange={(e) => handleOnChange(e)} className="select select-bordered w-full max-w-xs">
              <option></option>
              <option value="dogao">Dogão</option>
              <option value="gatinho">Gatinho</option>
            </select>
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