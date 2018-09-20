import { WebSocketService } from './../shared/web-socket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

    constructor(private wsService: WebSocketService) { }

    ngOnInit() {
        // websocket协议所以用ws://localhost:8085
        this.wsService.createObservableSocket("ws://localhost:8085")
            .subscribe(
                data => console.log( data ),
                err => console.log( err ),
                () => console.log( '流已经结束' )
            );
    }

    sendMessageToServer() {
        this.wsService.sendMessage('hello from client');
    }

}
