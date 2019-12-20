import { TestBed } from '@angular/core/testing';

import { PantryPanelService } from './pantry-panel.service';

describe('PantryPanelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PantryPanelService = TestBed.get(PantryPanelService);
    expect(service).toBeTruthy();
  });
});
