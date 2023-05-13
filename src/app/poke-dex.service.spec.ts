import { TestBed } from '@angular/core/testing';

import { PokeDexService } from './poke-dex.service';

describe('PokeDexService', () => {
  let service: PokeDexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeDexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
