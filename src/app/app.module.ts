import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { TaskModule } from './modules/task/task.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './shared/state/app.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    TaskModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
