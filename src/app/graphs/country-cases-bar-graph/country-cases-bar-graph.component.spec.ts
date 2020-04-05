import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCasesBarGraphComponent } from './country-cases-bar-graph.component';

describe('CountryCasesBarGraphComponent', () => {
  let component: CountryCasesBarGraphComponent;
  let fixture: ComponentFixture<CountryCasesBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCasesBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCasesBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
