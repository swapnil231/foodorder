import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekoutpageComponent } from './chekoutpage.component';

describe('ChekoutpageComponent', () => {
  let component: ChekoutpageComponent;
  let fixture: ComponentFixture<ChekoutpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChekoutpageComponent]
    });
    fixture = TestBed.createComponent(ChekoutpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
