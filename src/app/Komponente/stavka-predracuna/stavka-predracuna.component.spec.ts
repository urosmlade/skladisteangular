import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StavkaPredracunaComponent } from './stavka-predracuna.component';

describe('StavkaPredracunaComponent', () => {
  let component: StavkaPredracunaComponent;
  let fixture: ComponentFixture<StavkaPredracunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StavkaPredracunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StavkaPredracunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
