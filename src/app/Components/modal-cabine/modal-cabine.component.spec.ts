import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCabineComponent } from './modal-cabine.component';

describe('ModalCabineComponent', () => {
  let component: ModalCabineComponent;
  let fixture: ComponentFixture<ModalCabineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCabineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCabineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
