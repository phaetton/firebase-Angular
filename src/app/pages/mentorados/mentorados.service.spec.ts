import { TestBed } from '@angular/core/testing';

import { MentoradosService } from './mentorados.service';

describe('MentoradosService', () => {
  let service: MentoradosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentoradosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
