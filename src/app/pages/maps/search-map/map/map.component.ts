import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../entity/Location';
import {TableDataPerumahan} from '../../../../@core/data/perumahan';
import {NbDialogService, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  constructor(private service: TableDataPerumahan) {}
  zoom: number;
  longitude: number;
  latitude: number;
  datakoor: any[];
  datakoormasuk: any[];
  koor: Object;
  paths: Array<any> = [];
  @Input()
  public set searchedLocation(searchedLocation: Location) {
    this.latitude = searchedLocation.latitude;
    this.longitude = searchedLocation.longitude;
    this.zoom = 10;
  }

  ngOnInit() {
    // set up current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.searchedLocation = new Location(
          position.coords.latitude, position.coords.longitude,
        );
      });
    }
    this.koor = {
      "lat": 0,
      "lng" : 0,
    };
    this.service.getData().then( data => {
      this.datakoor = data;
      // this.datakoor.forEach(datakoor => {
      //   this.datakoormasuk = datakoor.koordinats;

        for ( let datakoor = 0; datakoor < this.datakoor.length; datakoor++) {
          for ( let kordinats = 0; kordinats < this.datakoor[datakoor].koordinats.length; kordinats++ ) {
              this.paths.push({
                lat: parseFloat(this.datakoor[datakoor].koordinats[0]['longitude']),
                lng: parseFloat(this.datakoor[datakoor].koordinats[0]['latitude']),
              })
          }
        }
    });
    this.paths.push(
      { lat: -6.1818, lng: 106.8223 },
      { lat: -6.121435, lng: 106.774124 },
      { lat: -6.261493, lng: 106.810600 },
      { lat: -6.225014, lng: 106.900447 },
      { lat: -6.121435, lng: 106.774124 },
      { lat: -6.261493, lng: 106.810600 },
      { lat: -6.225014, lng: 106.900447 },
    )
    console.log("path palsu", this.paths)
  }
  // paths: Array<any> = this.koor;

  //
  pathss: Array<any> = this.paths;
  styles: any[] = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd",
        },
      ],
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735",
        },
      ],
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6",
        },
      ],
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6",
        },
      ],
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be",
        },
      ],
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90",
        },
      ],
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae",
        },
      ],
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae",
        },
      ],
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c",
        },
      ],
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076",
        },
      ],
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530",
        },
      ],
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6",
        },
      ],
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8",
        },
      ],
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967",
        },
      ],
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62",
        },
      ],
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58",
        },
      ],
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555",
        },
      ],
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63",
        },
      ],
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae",
        },
      ],
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77",
        },
      ],
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd",
        },
      ],
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae",
        },
      ],
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2",
        },
      ],
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d",
        },
      ],
    },
  ]

}
