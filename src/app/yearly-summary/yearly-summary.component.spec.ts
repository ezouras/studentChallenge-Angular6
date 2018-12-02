import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlySummaryComponent } from './yearly-summary.component';

describe('StudentSummaryComponent', () => {
  let component: YearlySummaryComponent;
  let fixture: ComponentFixture<YearlySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
