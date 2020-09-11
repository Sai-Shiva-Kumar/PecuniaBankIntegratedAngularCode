import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrejectedloansComponent } from './viewrejectedloans.component';

describe('ViewrejectedloansComponent', () => {
  let component: ViewrejectedloansComponent;
  let fixture: ComponentFixture<ViewrejectedloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewrejectedloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewrejectedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
