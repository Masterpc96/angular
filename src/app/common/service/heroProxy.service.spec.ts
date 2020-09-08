import { TestBed } from '@angular/core/testing';

import { HeroProxyService } from './heroProxy.service';

describe('heroProxyService', () => {
  let service: HeroProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
