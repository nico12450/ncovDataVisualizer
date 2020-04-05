import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCasesBarGraphComponent } from './global-cases-bar-graph.component';

describe('GlobalCasesBarGraphComponent', () => {
  let component: GlobalCasesBarGraphComponent;
  let fixture: ComponentFixture<GlobalCasesBarGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCasesBarGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCasesBarGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
