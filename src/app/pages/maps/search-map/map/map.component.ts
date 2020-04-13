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
    this.zoom = 15;
  }

  ngOnInit(): void {
    // set up current location
    // if ('geolocation' in navigator) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.searchedLocation = new Location(
    //       position.coords.latitude, position.coords.longitude,
    //     );
    //   });
    // }
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
  paths: Array<any> = [
    { lat: -6.483565, lng: 106.753371},
    { lat: -6.486024, lng: 106.751376},
    { lat: -6.487152, lng: 106.752369},
    { lat: -6.485841, lng: 106.753171},
    { lat: -6.486150, lng: 106.754180},
    { lat: -6.485271, lng: 106.754733},
    { lat: -6.484845, lng: 106.754213},
    { lat: -6.484280, lng: 106.754470},
    { lat: -6.483923, lng: 106.754347},
    // { lat: -6.1818, lng: 106.8223 },
    // { lat: -6.121435, lng: 106.774124 },
    // { lat: -6.261493, lng: 106.810600 },
    // { lat: -6.225014, lng: 106.900447 },
    // { lat: -6.929722, lng: 107.585556},
    // { lat: -6.929722, lng: 107.585556},
    // { lat: -6.230833, lng: 107.013611},
    // { lat: -6.594444, lng: 106.789167},
    // { lat: -6.918056, lng: 106.926667},
    // { lat: -7.3274,   lng: 108.2207},
    // { lat: -6.7252,   lng: 108.5678},
    // { lat: -6.326389, lng: 108.32},
    // { lat: -7.2248	, lng: 108.2027},
    // { lat: -7.3385,   lng: 106.6206},
    // { lat: -7.0223,   lng: 108.5084},
  ]
}
