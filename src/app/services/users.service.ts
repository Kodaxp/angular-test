import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UsersInterface} from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api: string = 'https://api.github.com';

  constructor(private http: HttpClient) { }

  getAll(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(`${this.api}/users`);
  }
}
