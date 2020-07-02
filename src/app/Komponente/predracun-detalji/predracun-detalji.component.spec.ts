import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredracunDetaljiComponent } from './predracun-detalji.component';

describe('PredracunDetaljiComponent', () => {
  let component: PredracunDetaljiComponent;
  let fixture: ComponentFixture<PredracunDetaljiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredracunDetaljiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredracunDetaljiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
