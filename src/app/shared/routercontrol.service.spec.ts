import { TestBed } from '@angular/core/testing';

import { RoutercontrolService } from './routercontrol.service';

describe('RoutercontrolService', () => {
  let service: RoutercontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutercontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
