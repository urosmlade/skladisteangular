import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkapredracunaDijalogComponent } from './stavkapredracuna-dijalog.component';

describe('StavkapredracunaDijalogComponent', () => {
  let component: StavkapredracunaDijalogComponent;
  let fixture: ComponentFixture<StavkapredracunaDijalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkapredracunaDijalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkapredracunaDijalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
