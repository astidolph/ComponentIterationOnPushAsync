import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from 'src/assets/person';

@Injectable({
  providedIn: 'root'
})
export class PersonFromServerService {

  people: Person[] = [
    { id: 0, name: 'John' },
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Steve' }
  ];

  constructor() { }

  getPeople(): Observable<Person[]> {
    return of(this.people);
  }
}
