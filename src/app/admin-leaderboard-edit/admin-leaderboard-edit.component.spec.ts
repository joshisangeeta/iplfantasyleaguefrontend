import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaderboardEditComponent } from './admin-leaderboard-edit.component';

describe('AdminLeaderboardEditComponent', () => {
  let component: AdminLeaderboardEditComponent;
  let fixture: ComponentFixture<AdminLeaderboardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaderboardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaderboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
