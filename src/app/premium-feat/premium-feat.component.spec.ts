import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumFeatComponent } from './premium-feat.component';

describe('PremiumFeatComponent', () => {
  let component: PremiumFeatComponent;
  let fixture: ComponentFixture<PremiumFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumFeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremiumFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
