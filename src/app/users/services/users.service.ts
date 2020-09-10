import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './../models/users.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  private dataURL: any = './assets/json/users.json';
  getUsers(): Observable<any> {
    return this.httpClient.get<Users>(this.dataURL);
  }
}
