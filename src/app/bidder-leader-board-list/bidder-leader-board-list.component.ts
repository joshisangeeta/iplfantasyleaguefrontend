import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LeaderBoard } from '../LeaderBoard';

@Component({
  selector: 'app-bidder-leader-board-list',
  templateUrl: './bidder-leader-board-list.component.html',
  styleUrls: ['./bidder-leader-board-list.component.css']
})
export class BidderLeaderBoardListComponent implements OnInit {
  leaderboard:LeaderBoard;
  constructor(private dataService:DataService) { }

  ngOnInit() {this.dataService.getLeaderboard().subscribe(leaderboard=>this.leaderboard=leaderboard)
  }

}
