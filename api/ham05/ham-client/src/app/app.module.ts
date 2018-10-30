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

import { FormsModule } from '@angular/forms';
//from the angular official tutorial
import { HttpClientModule } from '@angular/common/http';

import { ClmicListComponent } from './components/assays/clmic/clmic-list/clmic-list.component';
import { ClmicDetailComponent } from './components/assays/clmic/clmic-detail/clmic-detail.component';
import { ClmicNewComponent } from './components/assays/clmic/clmic-new/clmic-new.component';
import { ClmicMetaComponent } from './components/assays/clmic/clmic-nestedforms/clmic-meta/clmic-meta.component';
import { ClmicUnitComponent } from './components/assays/clmic/clmic-nestedforms/clmic-unit/clmic-unit.component';
import { ClmicSearchComponent } from './components/assays/clmic/clmic-search/clmic-search.component';


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
    ClmicNewComponent,
    ClmicMetaComponent,
    ClmicUnitComponent,
    ClmicSearchComponent,


  ],
  imports: [
    BrowserModule,
    RoutingModule,

    ReactiveFormsModule,
    CommonModule,

    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {
      provide: "ClmicDataService",
      useClass: ClmicDataService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
