import { TestBed } from '@angular/core/testing';

import { LoteriaBoardService } from './loteria-board.service';

describe('LoteriaBoardService', () => {
  let service: LoteriaBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoteriaBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
