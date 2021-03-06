import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormioAuthService } from 'angular-formio/auth';
import {
  FormioResourceCreateComponent,
  FormioResourceService,
  FormioResourceConfig
} from 'angular-formio/resource';
import FormioUtils from 'formiojs/utils';

@Component({
  selector: 'app-volunteer-create',
  templateUrl: './volunteer-create.component.html',
  styleUrls: ['./volunteer-create.component.scss']
})
export class VolunteerCreateComponent extends FormioResourceCreateComponent implements OnInit {
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
    super.ngOnInit();

    // Wait for the parent event to be loaded.
    this.service.resources['event'].resourceLoaded.then((event) => {
      // Wait for the volunteer form to load.
      this.service.formLoaded.then((form) => {
        // If they wish to have a custom registration form.
        if (event.data.registrationForm) {
          const registerForm = FormioUtils.getComponent(form.components, 'event', true);
          registerForm.src = this.service.formFormio.projectUrl + '/' + event.data.registrationForm;

          registerForm.defaultValue = event;
          registerForm.hidden = true;

        }
        // Wait for the current user to be loaded.
        this.auth.userReady.then((user) => {
          const registerForm2 = FormioUtils.getComponent(form.components, 'nometprenom', true);
          registerForm2.defaultValue = this.auth.user.data.firstName + ' ' + this.auth.user.data.lastName;

          const registerForm3 = FormioUtils.getComponent(form.components, 'courriel', true);
          registerForm3.defaultValue = this.auth.user.data.email;


          // Default the user data inside of the registration form.
          this.service.resource.data.registration = {data: user.data};

          // Tell our form to re-render the submission.
          this.service.refresh.emit({
            property: 'submission',
            value: this.service.resource
          });
        });
      });
    });
  }

  public async redirect(event: Event): Promise<void> {
    await this.onSubmit(event); // CECI EST IMPOTANT: C'est ce qui permet de créer l'enregistrement!
    await setTimeout(() => {this.router.navigate(['event/']); }, 200);
  }
}
