import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamerasTableComponent } from './cameras-table.component';

describe('CamerasTableComponent', () => {
  let component: CamerasTableComponent;
  let fixture: ComponentFixture<CamerasTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamerasTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamerasTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
