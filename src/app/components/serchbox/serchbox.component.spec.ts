import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchboxComponent } from './serchbox.component';

describe('SerchboxComponent', () => {
  let component: SerchboxComponent;
  let fixture: ComponentFixture<SerchboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerchboxComponent]
    });
    fixture = TestBed.createComponent(SerchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
