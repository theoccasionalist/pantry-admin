import { TestBed } from '@angular/core/testing';

import { ProductsByTypeService } from './products-by-type.service';

describe('ProductsByTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsByTypeService = TestBed.get(ProductsByTypeService);
    expect(service).toBeTruthy();
  });
});
