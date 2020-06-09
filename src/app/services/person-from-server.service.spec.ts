import { TestBed } from '@angular/core/testing';

import { PersonFromServerService } from './person-from-server.service';

describe('PersonFromServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonFromServerService = TestBed.get(PersonFromServerService);
    expect(service).toBeTruthy();
  });
});
