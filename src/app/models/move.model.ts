export class Move {

  constructor(public _id?: string, public toId: string = '', public to: string = '', public at: number = 0, public amount: number = 0) {
  }
  setId?() {
    this._id = this._makeId();
  }
  _makeId?(length = 10) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
}