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

    // Wait for the parent event to be loaded.
    this.service.resources['event'].resourceLoaded.then((event) => {

      // Wait for the participant form to load.
      this.service.formLoaded.then((form) => {

        // // If they wish to have a custom registration form.
        if (event.data.registrationForm) {
          // console.log(form.components); // form.components are the fields of the form

          // // LA CLÉ ICI N'ÉTAIT PAS BONNE, IL FALLAIT LA CLÉ DANS L'API
          // const registerForm = FormioUtils.getComponent(form.components, 'event');

          // registerForm.src = this.service.formFormio.projectUrl + '/' + event.data.registrationForm;
          // registerForm.defaultProperty =  event.data.title;
          // registerForm.hidden = false;
          // registerForm.disabled = true;
          // console.log(registerForm);
        }

        // Wait for the current user to be loaded.
        this.auth.userReady.then((user) => {

          // Default the user data inside of the registration form.
          this.service.resource.data.registration = {data: user.data};

          // Tell our form to re-render the submission.
          // this.service.refresh.emit({
          //   property: 'submission',
          //   value: this.service.resource
          // });
        });
      });
    });
  }
}
