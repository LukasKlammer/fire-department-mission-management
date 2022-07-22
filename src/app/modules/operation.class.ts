export class Operation {

  timestamp: number;
  operationNumber: Number;
  address: string;
  city: string;
  keyword: string; // keyword ist das Einsatz-Stichwort: z. B. Wasserschaden
  caller: string;
  phone: number;
  comments: string;
  calltaker: string;
  priority: string[] = ['hoch', 'mittel', 'niedrig'];
  status: string[] = ['offen', 'läuft', 'abgeschlossen'];
  vehicles: string[];
  externalVehicles: string;
  notes: string;



  constructor(obj?: any) {
    this.timestamp = obj ? obj.timestamp : new Date().getTime();
    this.operationNumber = obj ? obj.operationNumber : '';
    this.address = obj ? obj.address : '';
    this.city = obj ? obj.city : '';
    this.keyword = obj ? obj.keyword : '';
    this.caller = obj ? obj.caller : '';
    this.phone = obj ? obj.phone : '';
    this.comments = obj ? obj.comments : '';
    this.calltaker = obj ? obj.calltaker : '';
    this.priority = obj ? obj.priority : '';
    this.status = obj ? obj.status : 'offen';
    this.vehicles = obj ? obj.vehicles : '';
    this.externalVehicles = obj ? obj.externalVehicles : '';
    this.notes = obj ? obj.notes : '';
  }
}
