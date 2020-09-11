import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbyidComponent } from './viewbyid.component';

describe('ViewbyidComponent', () => {
  let component: ViewbyidComponent;
  let fixture: ComponentFixture<ViewbyidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbyidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
