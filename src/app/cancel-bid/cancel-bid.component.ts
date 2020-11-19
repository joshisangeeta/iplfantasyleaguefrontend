import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BiddingDetails } from '../BidddingDetails';
import { Bidder } from '../Bidder';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cancel-bid',
  templateUrl: './cancel-bid.component.html',
  styleUrls: ['./cancel-bid.component.css']
})
export class CancelBidComponent implements OnInit {
  newBidding:Bidder=new Bidder()
  bidder:Bidder=new Bidder()
  matchId:number
  constructor(private dataservice:DataService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>this.matchId=params['id']);
    this.dataservice.getMatchDetailsById(this.matchId).subscribe(matches=>this.newBidding=matches);
  }
  cancel(){
    this.dataservice.cancelBid(this.newBidding).subscribe(bid=>this.bidder=bid)
    alert('bid cancelled')
    
  }
}
