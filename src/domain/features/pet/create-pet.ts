export interface CreatePet {
  execute: (params: CreatePet.params) => Promise<CreatePet.Result>
}

export namespace CreatePet {
  export type params = {
    name: string;
    breed: string;
    kind: string;
    custumerName: string
  }

  export type Result = {
    id: string;
    breed: string;
    kind: string;
    custumerName: string
  }
}