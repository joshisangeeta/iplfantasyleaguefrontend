import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TeamDetails } from '../TeamDetails';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
  teamdetails:TeamDetails[];
    constructor(private dataservice:DataService) { }
  
    ngOnInit(): void {
      this.dataservice.getTeamDetails().subscribe(teamdetails=>this.teamdetails=teamdetails);
    }
  
  }
