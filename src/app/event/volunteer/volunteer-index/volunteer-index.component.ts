import { Component, OnInit } from '@angular/core';
import { FormioGridComponent } from 'angular-formio/grid/grid.component';
import { FormioGrid } from 'angular-formio/grid/grid.module';


@Component({
  selector: 'app-volunteer-index',
  templateUrl: './volunteer-index.component.html',
  styleUrls: ['./volunteer-index.component.scss']
})
export class VolunteerIndexComponent implements OnInit {

  constructor() {
    console.log(FormioGridComponent.prototype.lastItem);
   }

  ngOnInit() {
  }

}
