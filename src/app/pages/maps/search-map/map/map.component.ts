import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../entity/Location';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  coordinate: {
    lng: string;
    city: string;
    lat: string }[];
  zoom: number;
  longitude: number;
  latitude: number;

  @Input()
  public set searchedLocation(searchedLocation: Location) {
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 12;
  }

  ngOnInit(): void {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude,
        );
      });
    }
    // this.latitude = []
    this.coordinate = [
      {
        "city": "Jakarta Pusat",
        "lat": "-6.1818",
        "lng": "106.8223",
      },
      {
        "city": "Jakarta Utara",
        "lat": "-6.121435",
        "lng": "106.774124",
      },
      {
        "city": "Jakarta Selatan",
        "lat": "-6.261493",
        "lng": "106.810600",
      },
      {
        "city": "Jakarta Timur",
        "lat": " -6.225014",
        "lng": "106.900447",
      },
    ]

  }
}
