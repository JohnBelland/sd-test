import {Component, Input, OnInit} from '@angular/core';
import {LegCrew} from "../../../../models/leg-crew";

@Component({
  selector: 'app-leg-crew',
  templateUrl: './leg-crew.component.html',
  styleUrls: ['./leg-crew.component.css']
})
export class LegCrewComponent implements OnInit {
  @Input() legCrew: LegCrew;
  constructor() { }

  ngOnInit() {
  }

}
