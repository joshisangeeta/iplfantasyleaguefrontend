import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPointsTableEditComponent } from './admin-points-table-edit.component';

describe('AdminPointsTableEditComponent', () => {
  let component: AdminPointsTableEditComponent;
  let fixture: ComponentFixture<AdminPointsTableEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPointsTableEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPointsTableEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
