import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamerasComponent } from './cameras/cameras.component';
import { HttpClientModule } from '@angular/common/http';
import { CamerasTableComponent } from './cameras/cameras-table/cameras-table.component';
import { MapComponent } from './cameras/map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    CamerasComponent,
    CamerasTableComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    GoogleMapsModule
  ]
})
export class CameraModule { }
