export class Teacher {
  id: number;
  prefix: string;
  name: string;
  lastName: string;
  fullName: string;

  constructor(id: number, prefix: string, name: string, lastName: string){
    this.id = id;
    this.prefix = prefix;
    this.name = name;
    this.lastName = lastName;
    this.fullName = `${prefix} ${name} ${lastName}`;
  }
}
