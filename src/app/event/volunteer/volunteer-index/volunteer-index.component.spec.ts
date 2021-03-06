import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerIndexComponent } from './volunteer-index.component';

describe('VolunteerIndexComponent', () => {
  let component: VolunteerIndexComponent;
  let fixture: ComponentFixture<VolunteerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
