export class UserData {
  constructor(public id: number, public name: string, public email: string) {}
}

export type UpdateDataType = boolean | UserData;
