import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonService } from 'src/app/services/person.service';
import { Person } from 'src/assets/person';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {

  person$ = new BehaviorSubject<Person>(null);

  isEven$: Observable<boolean>;

  @Input() set person(x: Person) {
    this.person$.next(x);
  }

  updatedName: string = null;

  constructor(private personService: PersonService) {
    this.isEven$ = this.person$
      .pipe(
        map(x => x.id % 2 === 0)
      );
  }

  // Removed the need for this method
  // isEvenId(id: number) {
  //   console.log('hit child method with id:' + this.person.id);
  //   return id % 2 === 0;
  // }

  updatePerson() {
    this.personService.updatePerson(this.person$.value.id, this.updatedName);
    this.updatedName = null;
  }

}
