export interface RemovePet {
  execute: (params: RemovePet.params) => Promise<RemovePet.Result>
}

export namespace RemovePet {
  export type params = {
    id: string;
  }

  export type Result = {
    response: boolean;
  }
}