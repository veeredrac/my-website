import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipkartDetailsComponent } from './flipkart-details.component';

describe('FlipkartDetailsComponent', () => {
  let component: FlipkartDetailsComponent;
  let fixture: ComponentFixture<FlipkartDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlipkartDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipkartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
