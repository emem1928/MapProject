import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Camera } from '../../model/Camera';

@Component({
  selector: 'app-cameras-table',
  templateUrl: './cameras-table.component.html',
  styleUrls: ['./cameras-table.component.scss']
})
export class CamerasTableComponent implements OnInit {

  @Input() id: string = "";
  @Input() title: string = "";
  @Input() cameras: Camera[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
