import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinesComponent } from './cabines.component';

describe('CabinesComponent', () => {
  let component: CabinesComponent;
  let fixture: ComponentFixture<CabinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
