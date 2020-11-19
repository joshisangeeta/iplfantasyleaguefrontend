import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LeaderBoard } from '../LeaderBoard';

@Component({
  selector: 'app-admin-leaderboard-list',
  templateUrl: './admin-leaderboard-list.component.html',
  styleUrls: ['./admin-leaderboard-list.component.css']
})
export class AdminLeaderboardListComponent implements OnInit {
  leaderboard:LeaderBoard;
  constructor(private dataService:DataService) { }

  ngOnInit() {this.dataService.getLeaderboard().subscribe(leaderboard=>this.leaderboard=leaderboard)
  }
}



