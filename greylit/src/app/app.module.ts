import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SearchPageComponent } from "./search-page/search-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { VisionComponent } from "./vision/vision.component";
import { LoginComponent } from "./login/login.component";
import { FeedComponent } from "./feed/feed.component";
import { Header2Component } from "./header2/header2.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ReviewComponent } from './review/review.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    HeaderComponent,
    CarouselComponent,
    JumbotronComponent,
    VisionComponent,
    routingComponents,
    LoginComponent,
    FeedComponent,
    Header2Component,
    DashboardComponent,
    UploadComponent,
    SearchResultsComponent,
    ReviewComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
