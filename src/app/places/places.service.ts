import { Injectable } from '@angular/core';
import {Place} from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places:Place[] = [];

  get places(){
    // @ts-ignore
    return [...this._places];
  }

  constructor() { }
}
