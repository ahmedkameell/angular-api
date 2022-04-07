import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedUi/navbar/navbar.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';
import { ListempComponent } from './employee/listemp/listemp.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateComponent } from './employee/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    ListempComponent,
    AddempComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
