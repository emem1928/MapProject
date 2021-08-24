import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Camera } from '../model/Camera';
import { CameraService } from '../service/camera.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss']
})
export class CamerasComponent implements OnInit {
  cameras$: Observable<Camera[]> = of([]);
  camerasDivisibleByThree$: Observable<Camera[]> = of([]);
  camerasDivisibleByFive$: Observable<Camera[]> = of([]);
  camerasDivisibleByThreeAndFive$: Observable<Camera[]> = of([]);
  camerasNotDivisibleByThreeAndFive$: Observable<Camera[]> = of([]);

  constructor(private cameraService: CameraService) { }

  ngOnInit(): void {
    this.cameras$ = this.cameraService.getCameras();
    this.camerasDivisibleByThree$ = this.cameras$.pipe(
      map(cameras => {
        const result = cameras.filter(c => c.number % 3 === 0)
        return result;
      })
    );

    this.camerasDivisibleByFive$ = this.cameras$.pipe(
      map(cameras => {
        const result = cameras.filter(c => c.number % 5 === 0)
        return result;
      })
    );

    this.camerasDivisibleByThreeAndFive$ = this.cameras$.pipe(
      map(cameras => {
        const result = cameras.filter(c => c.number % 3 === 0 && c.number % 5 === 0)
        return result;
      })
    );

    this.camerasNotDivisibleByThreeAndFive$ = this.cameras$.pipe(
      map(cameras => {
        const result = cameras.filter(c => c.number % 3 !== 0 && c.number % 5 !== 0)
        return result;
      })
    );
  }

}
