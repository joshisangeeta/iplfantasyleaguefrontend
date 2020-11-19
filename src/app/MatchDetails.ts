import { Time } from '@angular/common';

export class Matchdetails
{
    matchId:number;
    teamOne:String;
    teamTwo:String;
    date:Date;
    start_time:Time;
    end_time:Time;
    stadium:String;
    winner:String;
    status:String;
    delay:String;
}