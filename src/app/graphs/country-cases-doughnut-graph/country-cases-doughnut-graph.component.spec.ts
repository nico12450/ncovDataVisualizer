import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCasesDoughnutGraphComponent } from './country-cases-doughnut-graph.component';

describe('CountryCasesDoughnutGraphComponent', () => {
  let component: CountryCasesDoughnutGraphComponent;
  let fixture: ComponentFixture<CountryCasesDoughnutGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCasesDoughnutGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCasesDoughnutGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
