import { TestBed } from '@angular/core/testing';


import { pcGuard } from './pc.guard';

describe('pcGuard', () => {
  let guard: pcGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(pcGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
