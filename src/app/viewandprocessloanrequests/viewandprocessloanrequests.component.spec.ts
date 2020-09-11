import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewandprocessloanrequestsComponent } from './viewandprocessloanrequests.component';

describe('ViewandprocessloanrequestsComponent', () => {
  let component: ViewandprocessloanrequestsComponent;
  let fixture: ComponentFixture<ViewandprocessloanrequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewandprocessloanrequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewandprocessloanrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
