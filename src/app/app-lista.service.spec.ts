import { TestBed, inject } from '@angular/core/testing';

import { AppListaService } from './app-lista.service';

describe('AppListaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppListaService]
    });
  });

  it('should be created', inject([AppListaService], (service: AppListaService) => {
    expect(service).toBeTruthy();
  }));
});
