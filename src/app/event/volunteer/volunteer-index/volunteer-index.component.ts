import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormioGridComponent } from 'angular-formio/grid/grid.component';
import { FormioGrid } from 'angular-formio/grid/grid.module';
import { FormioResource, FormioResourceService } from 'angular-formio/resource';
import {FormioResourceConfig} from 'angular-formio/resource/resource.config';
import { FormioService, FormioLoader, FormioAlerts } from 'angular-formio';
import FormioUtils from 'formiojs/utils';
import { Router } from '@angular/router';


@Component({
  selector: 'app-volunteer-index',
  templateUrl: './volunteer-index.component.html',
  styleUrls: ['./volunteer-index.component.scss']
})
export class VolunteerIndexComponent implements OnInit {
  @ViewChild('grid2') public grid2: FormioGridComponent;
  public grid: FormioGridComponent;
  public router: Router;

  constructor(private service: FormioResourceService, private service2: FormioGrid) {
    // console.log(service);
    // console.log(grid);
    // console.log(service);
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
    console.log(this.router);
    console.log(row);
  }




}
