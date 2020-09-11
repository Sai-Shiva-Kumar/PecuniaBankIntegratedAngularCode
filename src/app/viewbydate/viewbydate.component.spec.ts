import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbydateComponent } from './viewbydate.component';

describe('ViewbydateComponent', () => {
  let component: ViewbydateComponent;
  let fixture: ComponentFixture<ViewbydateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbydateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
