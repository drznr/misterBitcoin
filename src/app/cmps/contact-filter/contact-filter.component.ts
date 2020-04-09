import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.less']
})
export class ContactFilterComponent implements OnInit {
  filterByCopy = null;

  constructor() { }

  @Input() filterBy;
  @Output() onFilter = new EventEmitter<any>();

  ngOnInit(): void {
    this.filterByCopy = { ...this.filterBy };
  }

  onInput() {
    this.onFilter.emit(this.filterByCopy);
  }

}
