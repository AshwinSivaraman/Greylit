import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { FeedComponent } from "./feed/feed.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UploadComponent } from "./upload/upload.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { ReviewComponent } from "./review/review.component";
import { AnalyticsComponent } from "./analytics/analytics.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "feed", component: FeedComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "upload", component: UploadComponent },
  { path: "searchresults", component: SearchResultsComponent },
  { path: "review", component: ReviewComponent },
  { path: "analytics", component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, LoginComponent, FeedComponent];
