import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Matchdetails } from './MatchDetails';
import { Admin } from './Admin';
import { Bidder } from './Bidder';
import { LeaderBoard } from './LeaderBoard';
import { TeamDetails } from './TeamDetails';
import { BiddingDetails } from './BidddingDetails';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url='http://localhost:8088';


  constructor(private http:HttpClient) { }

  adminLogin(admin:Admin):Observable<any>{
    return this.http.get(this.url.concat("/adminlogin/")+admin.userName+'/'+admin.password)
  }

  bidderLogin(bidder:Bidder):Observable<any>{
    return this.http.get(this.url.concat("/bidderlogin/")+bidder.email+'/'+bidder.password)
  }

  signUpBidder(bidder:Bidder):Observable<any>{
    return this.http.post(this.url.concat("/biddersignup/"),bidder)
  }

  getMatchDetails():Observable<any>
  {
    return this.http.get(this.url.concat("/match"))
  }
  getAllMatches():Observable<any>
{
 return this.http.get(this.url.concat("/match"));
  

  }
  getMatchById(matchId:number):Observable<any>
  {
   return this.http.get(this.url.concat("/match/")+matchId+"");
  }
 
  
  Update(match:Matchdetails):Observable<any>
  {
    return this.http.put(this.url.concat("/match"),match);
  }
  getTeamDetails():Observable<any>{
    return this.http.get(this.url.concat("/teamdetails"));
  }

  getLeaderboard():Observable<any>{
    return this.http.get(this.url.concat('/leaderboard'))
  }

  getBidderById(id:number):Observable<any>{
    let appendUrl=this.url.concat("/leaderboard/")+id+''
    return (this.http.get(appendUrl));
  }
  updateLeaderboard(leaderboard:LeaderBoard):Observable<any>{
    return this.http.post(this.url.concat('/leaderboard'),leaderboard)
  }
  getPointstable():Observable<any>{
    let appendUrl=this.url.concat('/pointstable/')
    return (this.http.get(appendUrl));
  
  }
  getPointstableById(id:number):Observable<any>{
    let appendUrl=this.url.concat("/pointstable/")+id+''
    return (this.http.get(appendUrl));
  }
  updatePointstable(pointstable:TeamDetails):Observable<any>{
    return this.http.post(this.url.concat('/pointstable'),pointstable)
  }
  getMatchDetailsById(id:number):Observable<any>{
    return this.http.get(this.url.concat('/match/')+id+"")
  }
  newBid(bidding:Bidder):Observable<any>{
    return this.http.post(this.url.concat('/newbid'),bidding)
  }
  cancelBid(bidding:Bidder):Observable<any>{
    return this.http.post(this.url.concat('/cancelbid'),bidding)
  }
  logout():Observable<any>{
    return this.http.get(this.url.concat('/logout'))
  }
}


