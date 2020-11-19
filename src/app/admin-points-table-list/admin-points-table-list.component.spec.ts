import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPointsTableListComponent } from './admin-points-table-list.component';

describe('AdminPointsTableListComponent', () => {
  let component: AdminPointsTableListComponent;
  let fixture: ComponentFixture<AdminPointsTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPointsTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPointsTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
