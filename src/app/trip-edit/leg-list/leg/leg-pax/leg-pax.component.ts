import {Component, Input, OnInit} from '@angular/core';
import {LegPax} from "../../../../models/leg-pax";

@Component({
  selector: 'app-leg-pax',
  templateUrl: './leg-pax.component.html',
  styleUrls: ['./leg-pax.component.css']
})
export class LegPaxComponent implements OnInit {
  @Input() legPax: LegPax;
  constructor() { }

  ngOnInit() {
  }

}
