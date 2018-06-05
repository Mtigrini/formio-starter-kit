import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerResourceComponent } from './volunteer-resource.component';

describe('VolunteerResourceComponent', () => {
  let component: VolunteerResourceComponent;
  let fixture: ComponentFixture<VolunteerResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
