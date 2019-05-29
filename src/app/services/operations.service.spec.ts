import { TestBed } from '@angular/core/testing';

import { OperationsService } from './operations.service';

describe('OperationsService', () => {
  let service: OperationsService;
  beforeEach(() => {
    service = new OperationsService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sub add two numbers', () => {
    const result = service.sum(10, 40);
    expect(result).toBe(50);
  });

  it('should substract two numbers', () => {
    const result = service.substract(10, 40);
    expect(result).toBe(-30);
  });

  it('should add multiply numbers', () => {
    const result = service.multiply(10, 40);
    expect(result).toBe(400);
  });

  it('should add divide numbers', () => {
    const result = service.divide(40, 10);
    expect(result).toBe(4);
  });

  it('should add divide numbers', () => {
    const result = service.divide(40, 0);
    expect(result).toBe(0);
  });
});
