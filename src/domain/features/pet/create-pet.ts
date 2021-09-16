export interface CreatePet {
  execute: (params: CreatePet.params) => Promise<CreatePet.Result>
}

export namespace CreatePet {
  export type params = {
    name: string;
    kind: string;
    customerName: string
  }

  export type Result = {
    id: string;
    kind: string;
    customerName: string
  }
}