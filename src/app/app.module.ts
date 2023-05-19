import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/public/login/login.component';
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BasicAuthInterceptor } from './services/interceptors/basic-auth.interceptor';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { HomeComponent } from './pages/private/home/home.component';
import { TeamContentComponent } from './components/team-content/team-content.component';
import { PlayerListComponent } from './components/player-list/player-list.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { StatisticTableComponent } from './components/statistic-results/statistic-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterComponent,
    HomeComponent,
    PlayerListComponent,
    TeamContentComponent,
    StatisticComponent,
    StatisticTableComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
