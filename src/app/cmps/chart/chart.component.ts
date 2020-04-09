import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {

  constructor() { }

  @Input() chart;

  ngOnInit(): void {
  }

}
