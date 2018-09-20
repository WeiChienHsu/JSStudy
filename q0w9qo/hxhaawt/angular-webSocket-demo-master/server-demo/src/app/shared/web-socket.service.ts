import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class WebSocketService {
    ws: WebSocket;

    constructor() { }

    createObservableSocket(url: string): Observable<any> {
        // 发送一个连接到服务器
        this.ws = new WebSocket(url);

        return new Observable(
            observer => {
                this.ws.onmessage = (event) => observer.next(event.data);
                this.ws.onerror = (event) => observer.error(event);
                this.ws.onclose = (event) => observer.complete();
            }
        );
    }

    // 向服务器发送消息
    sendMessage(message: string) {
        this.ws.send(message);
    }

}














