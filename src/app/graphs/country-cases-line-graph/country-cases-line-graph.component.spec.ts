import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCasesLineGraphComponent } from './country-cases-line-graph.component';

describe('CountryCasesLineGraphComponent', () => {
  let component: CountryCasesLineGraphComponent;
  let fixture: ComponentFixture<CountryCasesLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCasesLineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCasesLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
