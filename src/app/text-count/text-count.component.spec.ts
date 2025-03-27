import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextCountComponent } from './text-count.component';

describe('TextCountComponent', () => {
  let component: TextCountComponent;
  let fixture: ComponentFixture<TextCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
