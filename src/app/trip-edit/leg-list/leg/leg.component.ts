import {Component, Input, OnInit} from '@angular/core';
import {Leg} from "../../../models/leg";

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.css']
})
export class LegComponent implements OnInit {
  @Input() leg: Leg;
  constructor() { }

  ngOnInit() {
  }

}
