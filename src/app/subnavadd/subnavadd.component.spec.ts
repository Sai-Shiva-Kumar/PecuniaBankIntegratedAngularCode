import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavaddComponent } from './subnavadd.component';

describe('SubnavaddComponent', () => {
  let component: SubnavaddComponent;
  let fixture: ComponentFixture<SubnavaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnavaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
