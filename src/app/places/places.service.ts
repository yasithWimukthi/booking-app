import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places = [];

  get places(){
    return [...this._places];
  }

  constructor() { }
}
