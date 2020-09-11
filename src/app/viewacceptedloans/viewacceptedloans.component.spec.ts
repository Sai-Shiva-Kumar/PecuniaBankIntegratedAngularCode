import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewacceptedloansComponent } from './viewacceptedloans.component';

describe('ViewacceptedloansComponent', () => {
  let component: ViewacceptedloansComponent;
  let fixture: ComponentFixture<ViewacceptedloansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewacceptedloansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewacceptedloansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
