import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'angular-formio/resource';

@Component({
  selector: 'app-volunteer-resource',
  templateUrl: './volunteer-resource.component.html',
  styleUrls: ['./volunteer-resource.component.scss']
})
export class VolunteerResourceComponent extends FormioResourceComponent implements OnInit {
  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
