import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewModuleServiceService {
  constructor() { }

  load() : string {
    return "NewModuleService";
  }
}
