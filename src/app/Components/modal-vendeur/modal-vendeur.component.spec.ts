import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoadalVendeurComponent } from './modal-vendeur.component';

describe('MoadalVendeurComponent', () => {
  let component: MoadalVendeurComponent;
  let fixture: ComponentFixture<MoadalVendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoadalVendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoadalVendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
