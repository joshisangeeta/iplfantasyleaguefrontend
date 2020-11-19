import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bidder } from '../Bidder';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bidderlogin',
  templateUrl: './bidderlogin.component.html',
  styleUrls: ['./bidderlogin.component.css']
})
export class BidderloginComponent implements OnInit {
   
  bidder:Bidder=new Bidder();
  bidderLogin:Bidder=new Bidder();
  isBidder=false;
  isValid=false;
  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  loginMethod(){
    this.dataService.bidderLogin(this.bidder).subscribe((flag)=>{
      this.isValid=flag;
    if(this.isValid==true){
      alert("Login Successfull")
      this.isBidder=true;
      this.router.navigateByUrl("/bidhome")
  }
  else{
    alert("Login Failed Provide Valid Credentials")
  }
});
  }

}
