import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredracunDijalogComponent } from './predracun-dijalog.component';

describe('PredracunDijalogComponent', () => {
  let component: PredracunDijalogComponent;
  let fixture: ComponentFixture<PredracunDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredracunDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredracunDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
