let id: number = 0;

export class Hero {
  public id: number;
  constructor(public name: string,
              public hometown = '',
              public power = '') {
    id += 1;
    this.id = id;
  }
}