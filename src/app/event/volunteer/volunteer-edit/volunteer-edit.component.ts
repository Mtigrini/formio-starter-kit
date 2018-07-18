import { Component, OnInit } from '@angular/core';
import { FormioResourceEditComponent, FormioResource, FormioResourceService, FormioResourceConfig } from 'angular-formio/resource';
import { FormioAuthService } from 'angular-formio/auth';
import { ActivatedRoute, Router } from '@angular/router';
import FormioUtils from 'formiojs/utils';

@Component({
  selector: 'app-volunteer-edit',
  templateUrl: './volunteer-edit.component.html',
  styleUrls: ['./volunteer-edit.component.scss']
})
export class VolunteerEditComponent extends FormioResourceEditComponent implements OnInit {

  constructor(
    public service: FormioResourceService,
    public auth: FormioAuthService,
    public route: ActivatedRoute,
    public router: Router,
    public config: FormioResourceConfig
  ) {
    super(service, route, router, config);
  }

  ngOnInit() {
  }

  public async redirect(event: Event): Promise<void> {
    await this.onSubmit(event); // CECI EST IMPOTANT: C'est ce qui permet de faire l'update!!!
    await setTimeout(() => {this.router.navigate(['event/' + this.service.resourceId + '/volunteer']); }, 200);
  }
}
