import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CamerasTableComponent } from './camera/cameras/cameras-table/cameras-table.component';
import { CamerasComponent } from './camera/cameras/cameras.component';
import { MapComponent } from './camera/cameras/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CamerasComponent,
    CamerasTableComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
