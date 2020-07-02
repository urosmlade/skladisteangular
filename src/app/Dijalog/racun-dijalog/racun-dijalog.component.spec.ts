import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacunDijalogComponent } from './racun-dijalog.component';

describe('RacunDijalogComponent', () => {
  let component: RacunDijalogComponent;
  let fixture: ComponentFixture<RacunDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacunDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacunDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
