import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormioGridComponent } from 'angular-formio/grid/grid.component';
import { FormioGrid } from 'angular-formio/grid/grid.module';
import { FormioResource, FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';
import {FormioResourceConfig} from 'angular-formio/resource/resource.config';
import { FormioService, FormioLoader, FormioAlerts } from 'angular-formio';
import FormioUtils from 'formiojs/utils';
import { Router, ActivatedRoute } from '@angular/router';
import { VolunteerEditComponent } from '../volunteer-edit/volunteer-edit.component';



@Component({
  selector: 'app-volunteer-index',
  templateUrl: './volunteer-index.component.html',
  styleUrls: ['./volunteer-index.component.scss']
})
export class VolunteerIndexComponent extends FormioResourceComponent implements OnInit {
  @ViewChild('grid2') public grid2: FormioGridComponent;
  public grid: FormioGridComponent;
  public router: Router;

  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
    // console.log(service);
    // console.log(grid);
    // console.log(service);
    console.log(this.route);
  }

  ngOnInit() {
    const loader: FormioLoader = new FormioLoader();
    const alerts: FormioAlerts = new FormioAlerts();
    this.grid = new FormioGridComponent(loader, alerts);
    this.grid.ngOnInit();
    this.grid.src = 'https://jdggmmtbamlmyav.form.io/volunteer';
    this.grid.loadGrid('https://jdggmmtbamlmyav.form.io/volunteer/');
    // console.log(this.grid);
  }

  afterLoad(row: any) {
    // console.log(this.router);
    console.log(row);
  }




}
