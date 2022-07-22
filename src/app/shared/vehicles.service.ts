import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  availableVehicles:string[] = ['Atem', 'Deko', 'Fahrzeug 1', 'Fahrzeug 2', 'Fahrzeug 3', 'Fahrzeug 4', 'Fahrzeug 5', 'Fahrzeug 7', 'GSF', 'Kommando', 'Last 1', 'Last 2', 'Leiter', 'Lösch', 'Lüfter', 'Rüst', 'Strom', 'Tank 1', 'Tank 2', 'Tank 3', 'Voraus'];

  constructor() { }
}
