import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Matchdetails } from '../MatchDetails';

@Component({
  selector: 'app-schedulelist',
  templateUrl: './schedulelist.component.html',
  styleUrls: ['./schedulelist.component.css']
})
export class SchedulelistComponent implements OnInit {

 
  matches:Matchdetails[];
  constructor(private dataService:DataService) {

   }

  ngOnInit(): void {
    this.dataService.getAllMatches().subscribe(teams=>this.matches=teams);

}
}

