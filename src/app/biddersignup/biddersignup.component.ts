import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Bidder } from '../Bidder';
import { DataService } from '../data.service';

@Component({
  selector: 'app-biddersignup',
  templateUrl: './biddersignup.component.html',
  styleUrls: ['./biddersignup.component.css']
})
export class BiddersignupComponent implements OnInit {

  bidder:Bidder=new Bidder();
  addBidder:Bidder=new Bidder();
  isBidder=false;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  signUpMethod(){
     let newBidder=this.dataService.signUpBidder(this.bidder).subscribe(bidder=>this.addBidder=bidder)
      if(newBidder!=null){
        alert("new bidder added")
        this.isBidder=true;
      }
  }
  public noWhitespaceValidator(control: FormControl) {const isWhitespace = (control.value || '').trim().length === 0;const isValid = !isWhitespace;return isValid ? null : { 'whitespace': true };}

}
