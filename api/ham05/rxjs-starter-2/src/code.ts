
/* 
import {Observable}  from "rxjs/Observable";
import { fromEvent } from 'rxjs/observable/fromEvent';

var observable = fromEvent(document, 'mousemove');

setTimeout(() => {
    var subscription = observable.subscribe(
        (x:any) => addItem(x)
    )
}, 2000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
 */

///////////////////////////////////////////////////////////////////////////

import { Subject } from "rxjs";

var subject = new Subject();


subject.subscribe (
    data => addItem("Observer 1: " + data),
    err => addItem(err),
    () => addItem('Observer 1 Completed')
)

subject.next('The first thing has been sent.');
subject.next('...Observer 2 is about to subscribe...');

var observer2 = subject.subscribe(
    data => addItem('Observer 2: ' + data)
)

subject.next('The second thing had been sent.');
subject.next('The third thing had been sent.');

observer2.unsubscribe();

subject.next('The final thing had been sent.');


function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}


 ///////////////////////////////////////////////////////////////////////////



 ///////////////////////////////////////////////////////////////////////////




 ///////////////////////////////////////////////////////////////////////////



 ///////////////////////////////////////////////////////////////////////////



 ///////////////////////////////////////////////////////////////////////////




 ///////////////////////////////////////////////////////////////////////////



