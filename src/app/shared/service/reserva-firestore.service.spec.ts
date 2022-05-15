import { TestBed } from '@angular/core/testing';

import { ReservaFirestoreService } from './reserva-firestore.service';

describe('ReservaFirestoreService', () => {
  let service: ReservaFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
