import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormioModule } from 'angular-formio';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { VolunteerCreateComponent } from './volunteer-create/volunteer-create.component';

@NgModule({
  imports: [
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      create: VolunteerCreateComponent
    }))
  ],
  declarations: [VolunteerCreateComponent],
  providers: [
    FormioResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'volunteer',
        form: 'volunteer',
        parents: ['event']
      }
    }
  ]
})
export class VolunteerModule { }
