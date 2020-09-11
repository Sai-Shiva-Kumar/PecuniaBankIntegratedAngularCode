import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccountdetailsafteraddingloanComponent } from './viewaccountdetailsafteraddingloan.component';

describe('ViewaccountdetailsafteraddingloanComponent', () => {
  let component: ViewaccountdetailsafteraddingloanComponent;
  let fixture: ComponentFixture<ViewaccountdetailsafteraddingloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewaccountdetailsafteraddingloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaccountdetailsafteraddingloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
