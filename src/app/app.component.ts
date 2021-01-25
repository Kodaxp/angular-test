import {Component, OnInit} from '@angular/core';
import {UsersService} from './services/users.service';
import {UsersInterface} from './models/users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myVar = 'Hola Mundo';
  saludo = 'Buenos dias Joel Zuniga, como te encuentras?';
  users: UsersInterface[];

  constructor(private _userService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  par(numero: number) {
    return (numero % 2 === 0);
  }

  getUsers() {
    this._userService.getAll().subscribe( users => {
      this.users = users;
    });
  }
}
