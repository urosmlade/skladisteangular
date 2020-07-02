import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacDijalogComponent } from './kupac-dijalog.component';

describe('KupacDijalogComponent', () => {
  let component: KupacDijalogComponent;
  let fixture: ComponentFixture<KupacDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KupacDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KupacDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
