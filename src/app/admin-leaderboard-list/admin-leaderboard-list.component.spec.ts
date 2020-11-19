import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaderboardListComponent } from './admin-leaderboard-list.component';

describe('AdminLeaderboardListComponent', () => {
  let component: AdminLeaderboardListComponent;
  let fixture: ComponentFixture<AdminLeaderboardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLeaderboardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeaderboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
