import {Component, Input, OnInit} from '@angular/core';
import {LegDetails} from "../../../../models/leg-details";

@Component({
  selector: 'app-leg-details',
  templateUrl: './leg-details.component.html',
  styleUrls: ['./leg-details.component.css']
})
export class LegDetailsComponent implements OnInit {
  @Input() legDetails: LegDetails;
  constructor() { }

  ngOnInit() {
  }

}
