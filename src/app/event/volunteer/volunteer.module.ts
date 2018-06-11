import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormioModule } from 'angular-formio';
import { FormioGrid } from 'angular-formio/grid/grid.module';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { VolunteerCreateComponent } from './volunteer-create/volunteer-create.component';
import { VolunteerIndexComponent } from './volunteer-index/volunteer-index.component';
import { VolunteerEditComponent } from './volunteer-edit/volunteer-edit.component';
import { VolunteerResourceComponent } from './volunteer-resource/volunteer-resource.component';

const eventResourceRoutes: Routes = FormioResourceRoutes ({
  resource: VolunteerResourceComponent,
  index: VolunteerIndexComponent,
  create: VolunteerCreateComponent,
  edit: VolunteerEditComponent
});

@NgModule({
  imports: [
    FormioGrid,
    CommonModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      resource: VolunteerResourceComponent,
      index: VolunteerIndexComponent,
      create: VolunteerCreateComponent,
      edit: VolunteerEditComponent
    }))
  ],
  declarations: [VolunteerCreateComponent, VolunteerIndexComponent, VolunteerEditComponent, VolunteerResourceComponent],
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
