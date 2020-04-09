import { Injectable } from '@angular/core';
import { User }  from '../models/user.model';


const USER = {
  name: 'meshulam nahari',
  coins: 200,
  moves: []
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = USER;

  constructor() { }

  get getUser() {
    return this.user;
  }

}
