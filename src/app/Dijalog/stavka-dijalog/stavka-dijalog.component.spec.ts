import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaDijalogComponent } from './stavka-dijalog.component';

describe('StavkaDijalogComponent', () => {
  let component: StavkaDijalogComponent;
  let fixture: ComponentFixture<StavkaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
