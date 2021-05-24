import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './home/info/info.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { NewTransactionComponent } from './home/info/new-transaction/new-transaction.component';
import { ExtractComponent } from './home/info/extract/extract.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    InfoComponent,
    NewTransactionComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
