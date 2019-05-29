import { HeroService, Hero } from './hero.service';
import { of } from 'rxjs';

describe('Testing HeroService', () => {
  let service: HeroService;
  let http;
  let messagesService;
  beforeEach(() => {
    http = {
      get: () =>  of([new Hero()])
    };
    messagesService = {
      add: () => {}
    };
    service = new HeroService(http, messagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get heroes', () => {
    service.getHeroes().subscribe((heroes) => {
      expect(heroes.length).toBe(1);
    });
  });

});
