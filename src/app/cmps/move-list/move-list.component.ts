import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.less']
})
export class MoveListComponent implements OnInit {
  faExchangeAlt = faExchangeAlt;

  constructor() { }
  @Input() title: string;
  @Input() moves: Move[];

  ngOnInit(): void {
  }

}
