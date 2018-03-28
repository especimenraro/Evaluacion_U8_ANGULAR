/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeticionService } from './peticion.service';

describe('PeticionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeticionService]
    });
  });

  it('should ...', inject([PeticionService], (service: PeticionService) => {
    expect(service).toBeTruthy();
  }));
});
