import {Component, Input, OnInit} from '@angular/core';
import {Leg} from "../../models/leg";

@Component({
  selector: 'app-leg-list',
  templateUrl: './leg-list.component.html',
  styleUrls: ['./leg-list.component.css']
})
export class LegListComponent implements OnInit {
  @Input() legList: Leg[];

  constructor() { }

  ngOnInit() {
  }

}
