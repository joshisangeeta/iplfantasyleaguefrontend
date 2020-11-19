import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLeaderboardEditComponent } from './admin-leaderboard-edit/admin-leaderboard-edit.component';
import { AdminLeaderboardListComponent } from './admin-leaderboard-list/admin-leaderboard-list.component';
import { AdminPointsTableEditComponent } from './admin-points-table-edit/admin-points-table-edit.component';
import { AdminPointsTableListComponent } from './admin-points-table-list/admin-points-table-list.component';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { BidderLeaderBoardListComponent } from './bidder-leader-board-list/bidder-leader-board-list.component';
import { BidderloginComponent } from './bidderlogin/bidderlogin.component';
import { BiddersignupComponent } from './biddersignup/biddersignup.component';
import { BiddingComponent } from './bidding/bidding.component';
import { BidhomeComponent } from './bidhome/bidhome.component';
import { CancelBidComponent } from './cancel-bid/cancel-bid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { ScheduleeditComponent } from './scheduleedit/scheduleedit.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';

const routes: Routes = [{​​​​​path:"",redirectTo:'/dashboard','pathMatch':'full'
}​​​​​,{​​​​​path:"dashboard",component:DashboardComponent}​​​​​,
{path:"admin",component:AdminComponent},
{path:"bidderlogin",component:BidderloginComponent},
{path:"biddersignup",component:BiddersignupComponent},
{path:"adminhome",component:AdminhomeComponent},
{path:"list",component:ListComponent},
{path:"delete",component:DeleteComponent},
{path:"details/:id",component:DetailsComponent},
{path:"bidding",component:BiddingComponent},
{path:"bidhome",component:BidhomeComponent},
{path:"schedulelist",component:SchedulelistComponent},
{path:"scheduleedit/:id",component:ScheduleeditComponent},
{path:"teamdetails",component:TeamdetailsComponent},
{path:"schedulelist/:id",component:SchedulelistComponent},
{path:"adminleaderboardlist",component:AdminLeaderboardListComponent},
{path:"edit/:id",component:AdminLeaderboardEditComponent},
{path:"adminpointstablelist",component:AdminPointsTableListComponent},
{path:"edit-teamdetails/:id",component:AdminPointsTableEditComponent},
{path:"bidderleaderboardlist",component:BidderLeaderBoardListComponent},
{path:"cancel",component:CancelBidComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
