import { TestBed } from '@angular/core/testing';

import { MosaiqueService } from './mosaique.service';

describe('MosaiqueService', () => {
  let service: MosaiqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MosaiqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
