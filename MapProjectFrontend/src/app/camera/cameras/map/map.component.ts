import { Component, Input, OnInit } from '@angular/core';
import { Camera } from '../../model/Camera';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  center: google.maps.LatLngLiteral = {lat: 52.092876, lng: 5.104480};
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  markerPositions: google.maps.LatLngLiteral[] = [];

  @Input() set cameras(cameras: Camera[] | null) {
    this.markerPositions = cameras?.map(c => {
      return <google.maps.LatLngLiteral> { lat: c.latitude, lng: c.longitude };
    }) ?? []
  }

  ngOnInit(): void {
    this
  }

}
