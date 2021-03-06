import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBannerComponent } from './table-banner.component';

describe('TableBannerComponent', () => {
  let component: TableBannerComponent;
  let fixture: ComponentFixture<TableBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
