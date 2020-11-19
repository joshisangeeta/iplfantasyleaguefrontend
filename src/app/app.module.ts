import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { BiddingComponent } from './bidding/bidding.component';
import { BidhomeComponent } from './bidhome/bidhome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ScheduleeditComponent } from './scheduleedit/scheduleedit.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLeaderboardListComponent } from './admin-leaderboard-list/admin-leaderboard-list.component';
import { AdminLeaderboardEditComponent } from './admin-leaderboard-edit/admin-leaderboard-edit.component';
import { AdminPointsTableListComponent } from './admin-points-table-list/admin-points-table-list.component';
import { AdminPointsTableEditComponent } from './admin-points-table-edit/admin-points-table-edit.component';
import { BidderLeaderBoardListComponent } from './bidder-leader-board-list/bidder-leader-board-list.component';
import { CancelBidComponent } from './cancel-bid/cancel-bid.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminhomeComponent,
    BidderloginComponent,
    BiddersignupComponent,
    BiddingComponent,
    BidhomeComponent,
    DashboardComponent,
    DeleteComponent,
    DetailsComponent,
    ListComponent,
    ScheduleeditComponent,
    SchedulelistComponent,
    TeamdetailsComponent,
    AdminLeaderboardListComponent,
    AdminLeaderboardEditComponent,
    AdminPointsTableListComponent,
    AdminPointsTableEditComponent,
    BidderLeaderBoardListComponent,
    CancelBidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
