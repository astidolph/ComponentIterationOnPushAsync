import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Person } from 'src/assets/person';
import { PersonFromServerService } from './person-from-server.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  people$ = new BehaviorSubject<Person[]>([]);

  constructor(private server: PersonFromServerService) { }

  getPeople() {
    this.server.getPeople()
    .subscribe(x => {
      this.people$.next(x);
    });
  }

  addPerson(name: string) {
    this.people$.next([...this.people$.value, { id: this.people$.value.length, name } ]);
  }

  updatePerson(id: number, name: string) {
    const idx = this.people$.value.findIndex(x => x.id === id);
    const people = this.people$.value;
    people[idx] = { id, name };

    this.people$.next(people);
  }
}
