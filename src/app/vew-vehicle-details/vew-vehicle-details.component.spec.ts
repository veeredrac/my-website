import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewVehicleDetailsComponent } from './vew-vehicle-details.component';

describe('VewVehicleDetailsComponent', () => {
  let component: VewVehicleDetailsComponent;
  let fixture: ComponentFixture<VewVehicleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VewVehicleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VewVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
