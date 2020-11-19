import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { LeaderBoard } from '../LeaderBoard';

@Component({
  selector: 'app-admin-leaderboard-edit',
  templateUrl: './admin-leaderboard-edit.component.html',
  styleUrls: ['./admin-leaderboard-edit.component.css']
})
export class AdminLeaderboardEditComponent implements OnInit {
   
  edited :boolean=false;
editLeaderboard:LeaderBoard = new LeaderBoard();
bidderId:number;
  islogout: boolean;
  constructor(private dataService:DataService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(){
    this.route.params.subscribe(params=>this.bidderId=params['id']);
    this.dataService.getBidderById(this.bidderId).subscribe(leaderboard=>this.editLeaderboard=leaderboard);
 
   
    
  }
editBidderPoints(){
  this.dataService.updateLeaderboard(this.editLeaderboard).subscribe(leaderboard=>this.editLeaderboard=leaderboard)
  alert("bidderpoints edited successfully")
  this.edited=true;
  
}
logout(){
  this.dataService.logout().subscribe((flag)=>{
    this.islogout=flag;
  if(this.islogout==true){
    alert("Login Successfull")
    this.router.navigateByUrl("/dashboard")
}
else{
  alert("Login Failed Provide Valid Credentials")
}
});
}
}