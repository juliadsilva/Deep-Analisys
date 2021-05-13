import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PartidasService } from './partidas.service';

describe('PartidasService', () => {
  let service: PartidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PartidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
