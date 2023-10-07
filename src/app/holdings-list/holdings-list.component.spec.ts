import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingsListComponent } from './holdings-list.component';

describe('HoldingsListComponent', () => {
  let component: HoldingsListComponent;
  let fixture: ComponentFixture<HoldingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoldingsListComponent]
    });
    fixture = TestBed.createComponent(HoldingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});