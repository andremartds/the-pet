type PetData = {
  id?: string;
  name: string;
  breed: string;
  kind: string;
  custumerName: string;
};

export class Pet {
  id?: string;
  name: string;
  kind: string;
  custumerName: string;

  constructor(petData: PetData) {
    this.id = petData?.id;
    this.name = petData.name;
    this.custumerName = petData.custumerName;
    this.kind = petData.kind;
  }
}
