import { Component } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  model = new User('Michael', 'Jordan', '2323 Chicago Ave', 'MJ23@winsupplyinc.com');

  submitted = false;


  onSubmit() { this.submitted = true; }

  newUser() {
    this.model = new User('','', '', '');
  }
}
