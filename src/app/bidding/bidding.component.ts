import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Matchdetails } from '../MatchDetails';
import { TeamDetails } from '../TeamDetails';
import { BiddingDetails } from '../BidddingDetails';
import { Bidder } from '../Bidder';
@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.css']
})
export class BiddingComponent implements OnInit {
  newBidding:Bidder=new Bidder()
  bidder:Bidder=new Bidder()
  matchId:number
  constructor(private dataservice:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  bidding(){
    this.dataservice.newBid(this.newBidding).subscribe(bid=>this.bidder=bid)
    alert('bid successful')
  }

}
