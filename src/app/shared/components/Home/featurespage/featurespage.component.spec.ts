import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturespageComponent } from './featurespage.component';

describe('FeaturespageComponent', () => {
  let component: FeaturespageComponent;
  let fixture: ComponentFixture<FeaturespageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturespageComponent]
    });
    fixture = TestBed.createComponent(FeaturespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
