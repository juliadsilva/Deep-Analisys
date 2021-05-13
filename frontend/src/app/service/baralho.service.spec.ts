import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaralhoService } from './baralho.service';

describe('BaralhoService', () => {
  let service: BaralhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BaralhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
