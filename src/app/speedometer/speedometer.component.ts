import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss'],
})
export class SpeedometerComponent implements OnInit {
  @Input() data: string;
  @Input() name: string;

  constructor() {}

  ngOnInit() {}
}
