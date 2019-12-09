import { RideService } from './../../services/ride.service';
import { post } from 'selenium-webdriver/http';
import { Post } from 'src/app/models/post.model';

import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  currentDate: string;
  hours: string;

  post: Post = new Post();
  from: string;
  to: string;
  travel_date: string;
  travel_time: string;
  seats: string;
  price: string;
  description: string;
  address: Object;
  establishmentAddress: Object;
  formattedAddress: string;
  formattedEstablishmentAddress: string;
  phone: string;




  constructor(private RideService: RideService, public zone: NgZone) { }

  ngOnInit() {

    this.currentDate = new Date().toISOString().split('T')[0];
    let date = new Date();
    this.hours = date.getHours().toLocaleString();
    const element = document.getElementById('date') as HTMLInputElement;
    element.valueAsNumber =
      Date.now() - new Date().getTimezoneOffset() * 60000;
  }


  addRide(event: Event) {
    console.log('Add clicked');
    console.log(this.post);
    let from = this.formattedAddress;
    let to= this.formattedEstablishmentAddress;
    this.post.from=from;
    this.post.to=to;
    console.log(this.post.from);
    console.log(this.post);
    this.RideService.add(this.post).subscribe();
    window.location.reload();
  }
  getAddress(place: object) {
    this.address = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedAddress = place['formatted_address'];
    this.zone.run(() => this.formattedAddress = place['formatted_address']);
  }
  getEstablishmentAddress(place: object) {
    this.establishmentAddress = place['formatted_address'];
    this.phone = this.getPhone(place);
    this.formattedEstablishmentAddress = place['formatted_address'];
    this.zone.run(() => {
      this.formattedEstablishmentAddress = place['formatted_address'];
      this.phone = place['formatted_phone_number'];
    });
  }

  getAddrComponent(place, componentTemplate) {
    let result;

    for (let i = 0; i < place.address_components.length; i++) {
      const addressType = place.address_components[i].types[0];
      if (componentTemplate[addressType]) {
        result = place.address_components[i][componentTemplate[addressType]];
        return result;
      }
    }
    return;
  }

  getStreetNumber(place) {
    const COMPONENT_TEMPLATE = { street_number: 'short_name' },
      streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return streetNumber;
  }

  getStreet(place) {
    const COMPONENT_TEMPLATE = { route: 'long_name' },
      street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return street;
  }

  getCity(place) {
    const COMPONENT_TEMPLATE = { locality: 'long_name' },
      city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    console.log(city);
    return city;

  }

  getState(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getDistrict(place) {
    const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
      state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return state;
  }

  getCountryShort(place) {
    const COMPONENT_TEMPLATE = { country: 'short_name' },
      countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return countryShort;
  }

  getCountry(place) {
    const COMPONENT_TEMPLATE = { country: 'long_name' },
      country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return country;
  }

  getPostCode(place) {
    const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
      postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return postCode;
  }

  getPhone(place) {
    const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
      phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
    return phone;
  }


}
