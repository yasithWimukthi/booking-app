import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ModalController, NavController} from "@ionic/angular";
import {CreateBookingComponent} from "../../../bookings/create-booking/create-booking.component";
import {Place} from "../../place.model";
import {PlacesService} from "../../places.service";


@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {

  place:Place;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private navController: NavController,
    private modalController: ModalController,
    private placesService:PlacesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      if(!paramMap.has('placeId')){
        this.navController.navigateBack('places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookPlace() {
    //this.navController.navigateBack('/places/tabs/discover');
    this.modalController.create({component: CreateBookingComponent}).then(r => r.present());
  }
}
