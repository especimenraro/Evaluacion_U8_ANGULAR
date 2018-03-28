/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioCuentasService } from './servicio-cuentas.service';

describe('ServicioCuentasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioCuentasService]
    });
  });

  it('should ...', inject([ServicioCuentasService], (service: ServicioCuentasService) => {
    expect(service).toBeTruthy();
  }));
});
