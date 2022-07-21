export class Mission {
  description: string;
  timestamp: number;


  constructor(obj?: any) {
    this.description = obj ? obj.description : '';
    this.timestamp = obj ? obj.timestamp : '';
  }

  // public toJSON() {
  //   return {
  //     description: this.description,
  //     startDate: this.startDate,
  //   }
  // }
}
