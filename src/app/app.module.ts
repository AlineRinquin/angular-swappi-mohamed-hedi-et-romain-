import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { SwapiService } from './swapi.service';
import { SwapiComponent } from './swapi/swapi.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SwapiComponent,
    DetailsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [SwapiService],
})
export class AppModule {}
