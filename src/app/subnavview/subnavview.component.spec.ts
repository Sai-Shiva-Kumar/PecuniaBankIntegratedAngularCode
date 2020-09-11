import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnavviewComponent } from './subnavview.component';

describe('SubnavviewComponent', () => {
  let component: SubnavviewComponent;
  let fixture: ComponentFixture<SubnavviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnavviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnavviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
