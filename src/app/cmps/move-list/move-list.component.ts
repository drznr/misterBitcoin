import { Component, OnInit, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.less']
})
export class MoveListComponent implements OnInit {

  constructor() { }
  @Input() title: string;
  @Input() moves: Move[];

  ngOnInit(): void {
  }

}
