import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndependentComponentComponent } from './independent-component.component';

describe('IndependentComponentComponent', () => {
  let component: IndependentComponentComponent;
  let fixture: ComponentFixture<IndependentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndependentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndependentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
