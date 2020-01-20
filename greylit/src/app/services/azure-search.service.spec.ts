import { TestBed } from '@angular/core/testing';

import { AzureSearchService } from './azure-search.service';

describe('AzureSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AzureSearchService = TestBed.get(AzureSearchService);
    expect(service).toBeTruthy();
  });
});
