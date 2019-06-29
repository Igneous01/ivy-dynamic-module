import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor() { }

  load() : string {
    return "My Service Data";
  }
}
