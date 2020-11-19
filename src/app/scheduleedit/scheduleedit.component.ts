import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Matchdetails } from '../MatchDetails';

@Component({
  selector: 'app-scheduleedit',
  templateUrl: './scheduleedit.component.html',
  styleUrls: ['./scheduleedit.component.css']
})
export class ScheduleeditComponent implements OnInit {

  edited:boolean=false;
 editMatch:Matchdetails=new Matchdetails();
 matchId:number;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>this.matchId=params['id']);
    this.dataService.getMatchById(this.matchId).subscribe(match=>this.editMatch=match);
   
    
  
}
edit()
{
  if(this.editMatch.status==="Completed")
  {
    if( this.editMatch.delay.length!==0)
    {
      alert("delay time should be empty");
    }
    if(this.editMatch.winner.length==0  )
    {
    alert("winner should not be empty");
    
    }
   else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
       alert("edited successfully");
         this.edited=true;
 
      } }
  
 else if(this.editMatch.status==="InProgress" )
  {
    if(this.editMatch.winner.length!==0 ){
      alert("winner should be empty");}
     else if( this.editMatch.delay.length!==0)
      {
        alert("delay time should be empty");
      }
      else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }
 
  }
  else if(this.editMatch.status==="YetToStart")
  {
    if(this.editMatch.winner.length!==0 ){
      alert("winner should be empty");}
      if( this.editMatch.delay.length!==0)
      {
        alert("delay time should be empty");
      }
      else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }
  }
  else if(this.editMatch.status==="Delayed")
  {
    if(this.editMatch.winner.length!==0){
      alert("winner should be empty  ");}
     if(this.editMatch.delay.length==0)
      {
        alert("delay should not be empty");
      }
      else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }
 
  }
  else if(this.editMatch.winner.length!==0)
  {
    if(this.editMatch.status!=="Completed" || this.editMatch.delay.length!=0){
     
    alert("status should be completed and delay should be empty");}
    else
      {
       
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  
  this.edited=true;
      }
    
 
  }
  else if(this.editMatch.winner.length===0)
  {
    if(this.editMatch.status==="Completed" || this.editMatch.delay.length!==0){
    alert("status should not be completed and delay should  be empty" );}
    else
      {
        this.dataService.Update(this.editMatch).subscribe(match=>this.editMatch=match);
  alert("edited successfully");
  this.edited=true;
      }
 
      
  }
  

  
 
 
 
}
}
