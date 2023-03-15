import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBoutiqueComponent } from './modal-boutique.component';

describe('ModalBoutiqueComponent', () => {
  let component: ModalBoutiqueComponent;
  let fixture: ComponentFixture<ModalBoutiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalBoutiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
