import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { TeamDetails } from '../TeamDetails';

@Component({
  selector: 'app-admin-points-table-edit',
  templateUrl: './admin-points-table-edit.component.html',
  styleUrls: ['./admin-points-table-edit.component.css']
})
export class AdminPointsTableEditComponent implements OnInit {

  edited :boolean=false;
  editTeamdetails:TeamDetails = new TeamDetails ();
  teamId:number;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }
 
  ngOnInit() {
 
    this.route.params.subscribe(params=>this.teamId=params['id']);
  this.dataService.getPointstableById(this.teamId).subscribe(pointstable=>this.editTeamdetails=pointstable);
 
  }
  editPoints(){
    this.dataService.updatePointstable(this.editTeamdetails).subscribe(pointstable=>this.editTeamdetails=pointstable);
    alert("points edited successfully")
    this.edited=true;
    
  }
}
