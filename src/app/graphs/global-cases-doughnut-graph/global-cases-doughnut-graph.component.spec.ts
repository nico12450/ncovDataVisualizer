import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCasesDoughnutGraphComponent } from './global-cases-doughnut-graph.component';

describe('GlobalCasesDoughnutGraphComponent', () => {
  let component: GlobalCasesDoughnutGraphComponent;
  let fixture: ComponentFixture<GlobalCasesDoughnutGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCasesDoughnutGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCasesDoughnutGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
