import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredracunNewComponent } from './predracun-new.component';

describe('PredracunNewComponent', () => {
  let component: PredracunNewComponent;
  let fixture: ComponentFixture<PredracunNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredracunNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredracunNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
