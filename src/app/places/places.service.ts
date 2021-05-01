import { Injectable } from '@angular/core';
import {Place} from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places:Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://filminglocationwanted.com/wp-content/uploads/2015/06/manhattan-city-location2.jpg',
      150.00
    ),
    new Place(
      'p2',
      'L\' Amour Toujours',
      'A romantic place in paris',
      'https://media-cdn.tripadvisor.com/media/photo-s/16/0b/96/09/hotel-amour.jpg',
      200.00
    ),
    new Place(
      'p3',
      'The Foggy Place',
      'Not your average city trip!',
      'https://i.pinimg.com/originals/9c/88/44/9c8844b217bdb6c17db14f51ad2e51a5.jpg',
      100.00
    )
  ];

  public getPlaces(){
    // @ts-ignore
    return [...this._places];
  }

  public getPlace(placeId:string){
    return {...this._places.find(place => place.id === placeId)}
  }

  constructor() { }
}
