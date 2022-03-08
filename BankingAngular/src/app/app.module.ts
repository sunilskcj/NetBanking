import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NetBankingModule } from './net-banking/net-banking.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, NetBankingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
