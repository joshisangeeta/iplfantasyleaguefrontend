import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderLeaderBoardListComponent } from './bidder-leader-board-list.component';

describe('BidderLeaderBoardListComponent', () => {
  let component: BidderLeaderBoardListComponent;
  let fixture: ComponentFixture<BidderLeaderBoardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderLeaderBoardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderLeaderBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
