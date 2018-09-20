import { WebSocketService } from './shared/web-socket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import { WebSocketComponent } from './web-socket/web-socket.component';

@NgModule({
    declarations: [
        AppComponent,
        ProductComponent,
        WebSocketComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [WebSocketService],
    bootstrap: [AppComponent]
})
export class AppModule { }
