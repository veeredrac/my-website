import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalcultorComponent } from './emi-calcultor.component';

describe('EmiCalcultorComponent', () => {
  let component: EmiCalcultorComponent;
  let fixture: ComponentFixture<EmiCalcultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmiCalcultorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmiCalcultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
