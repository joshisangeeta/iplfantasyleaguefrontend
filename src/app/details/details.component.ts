import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Matchdetails } from '../MatchDetails';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  match:Matchdetails=new Matchdetails()
  matchId:number;

  constructor(private dataservice:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.matchId=params['id']);
    this.dataservice.getMatchDetailsById(this.matchId).subscribe(matches=>this.match=matches);
  }
  }


