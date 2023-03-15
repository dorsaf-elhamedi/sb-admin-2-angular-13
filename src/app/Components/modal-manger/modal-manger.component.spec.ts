import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMangerComponent } from './modal-manger.component';

describe('ModalMangerComponent', () => {
  let component: ModalMangerComponent;
  let fixture: ComponentFixture<ModalMangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMangerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
