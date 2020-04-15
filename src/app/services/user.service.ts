import { Injectable } from '@angular/core';
import { User }  from '../models/user.model';
import { StorageService } from './storage.service';
import { Contact } from '../models/contact.model';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Move } from '../models/move.model';

const USER_KEY = 'loggedUser';
const USER = {
  _id: 'HwmtOSxM9g',
  name: 'Guest',
  coins: 200,
  moves: []
};
const MOVES = [];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = this.storageService.load(USER_KEY) || USER;

  private _moves: Move[] = MOVES;
  private _moves$ = new BehaviorSubject<Array<Move>>(MOVES);
  

  constructor(private storageService: StorageService) { }

  public signup(name): void {
    const newUser = {
      name,
      coins: 100,
      moves: []
    }
    this.user = newUser;
    this.storageService.store(USER_KEY, this.user);
  }
  public addMove(contact: Contact, amount: number): void {
    const newMove = new Move('', contact._id, contact.name, Date.now(), amount);
    newMove.setId();
    this._moves.push(newMove);
    this._moves$.next(this._moves);

    this.user.coins -= amount;
    this.storageService.store(USER_KEY, this.user);   
  }
  public getContactMoves(contactId): Observable<Move[]> {
    return from(this._moves$).pipe(
      map(moves => moves.filter(move => move.toId === contactId))
    );
  }
  public getUserMoves(): Observable<Move[]> {
    return from(this._moves$).pipe(
      map(moves => moves.sort(this._dynamicSort('at'))),
      map(moves => moves.slice(0, 3))
    );
  }

  get getUser() {
    return this.user;
  }

  private _dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

}
