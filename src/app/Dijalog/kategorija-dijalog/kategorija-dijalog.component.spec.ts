import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijaDijalogComponent } from './kategorija-dijalog.component';

describe('KategorijaDijalogComponent', () => {
  let component: KategorijaDijalogComponent;
  let fixture: ComponentFixture<KategorijaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
