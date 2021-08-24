import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera } from '../model/Camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private cameraUrl = "https://localhost:5001/Camera";

  constructor(private http: HttpClient) { }

  getCameras() {
    return this.http.get<Camera[]>(this.cameraUrl);
  }
}
