import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCasesLineGraphComponent } from './global-cases-line-graph.component';

describe('GlobalCasesLineGraphComponent', () => {
  let component: GlobalCasesLineGraphComponent;
  let fixture: ComponentFixture<GlobalCasesLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCasesLineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCasesLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
