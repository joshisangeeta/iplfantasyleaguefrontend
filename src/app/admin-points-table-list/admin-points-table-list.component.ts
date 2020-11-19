import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { TeamDetails } from '../TeamDetails';

@Component({
  selector: 'app-admin-points-table-list',
  templateUrl: './admin-points-table-list.component.html',
  styleUrls: ['./admin-points-table-list.component.css']
})
export class AdminPointsTableListComponent implements OnInit {

  pointstable:TeamDetails[];
  constructor( private dataService:DataService ) {
    
  }
 
  ngOnInit(){this.dataService.getPointstable().subscribe(pointstable=>this.pointstable=pointstable)
  }
}

