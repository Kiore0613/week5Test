import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { BreadComponent } from './bread/bread.component';
import { SaladComponent } from './ingredients/salad/salad.component';
import { CheeseComponent } from './ingredients/cheese/cheese.component';
import { MeatComponent } from './ingredients/meat/meat.component';
import { BaconComponent } from './ingredients/bacon/bacon.component';
import { HeaderComponent } from './header/header.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    IngredientsComponent,
    BreadComponent,
    SaladComponent,
    CheeseComponent,
    MeatComponent,
    BaconComponent,
    HeaderComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
