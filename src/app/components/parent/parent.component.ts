import { Component } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  newPerson: string = null;

  constructor(public personService: PersonService) {
    this.personService.getPeople();
  }

  addPerson() {
    this.personService.addPerson(this.newPerson);
    this.newPerson = null;
  }
}
