import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AssayComponent } from './components/assay/assay.component';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ClMicComponent } from './components/cl-mic/cl-mic.component';
import { ClHepComponent } from './components/cl-hep/cl-hep.component';
import { ClmicDetailComponent } from './components/clmic-detail/clmic-detail.component';
import { ClmicNewComponent } from './components/clmic-new/clmic-new.component';


import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    AssayComponent,
    HomeComponent,
    ClMicComponent,
    ClHepComponent,
    ClmicDetailComponent,
    ClmicNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: "data",
      useClass: DataService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
