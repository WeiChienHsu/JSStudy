import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/views/navbar/navbar.component';
import { FooterComponent } from './components/views/footer/footer.component';
import { HomeComponent } from './components/views/home/home.component';
import { SearchComponent } from './components/views/search/search.component';
import { CarouselComponent } from './components/views/carousel/carousel.component';
import { RoutingModule } from './routing.module';



import { ClmicListComponent } from './components/assays/clmic/clmic-list/clmic-list.component';
import { ClmicDetailComponent } from './components/assays/clmic/clmic-detail/clmic-detail.component';
import { ClmicNewComponent } from './components/assays/clmic/clmic-new/clmic-new.component';

import { ClmicDataService } from './services/clmic-data.service';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    CarouselComponent,

    ClmicListComponent,
    ClmicDetailComponent,
    ClmicNewComponent

  ],
  imports: [
    BrowserModule,
    RoutingModule,

    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    {
      provide: "ClmicDataService",
      useClass: ClmicDataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
