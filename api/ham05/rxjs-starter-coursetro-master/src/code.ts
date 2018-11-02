// import * as Rx from "rxjs/Observable";
// console.log(Rx);


/* 
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create(function subscribe(observer: any) {
    observer.next('Hey guys!');
}); */

/* var observable = Observable.create((observer: any) => {
    observer.next('Hey guys!');
});

observable.subscribe((x: any) => console.log(x));
 */

//////////////////////////////////////////////////////////////////////

/*  
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!');
})

observable.subscribe((x:any) => addItem(x));

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
 */
//////////////////////////////////////////////////////////////////////
/* 
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    observer.next('Hey guys!')
    observer.next('How are you?')
    observer.complete()
    observer.next('This will not send')
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

 */

//////////////////////////////////////////////////////////////////////

/* 

import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        observer.complete()
        observer.next('This will not send')
    } catch (err) {
        observer.error(err)
    }
})

observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
 */

//////////////////////////////////////////////////////////////////////

/* 
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

 */
//////////////////////////////////////////////////////////////////////
/* 
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
})

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

var observer2 = observable.subscribe(
    (x:any) => addItem(x)
);

observer.add(observer2);

setTimeout(() => {
    observer.unsubscribe();
}, 6001);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

 */
//////////////////////////////////////////////////////////////////////

/* 
import {Observable}  from "rxjs/Observable";
import 'rxjs/add/operator/share'

var observable = Observable.create((observer:any) => {
    try {
        observer.next('Hey guys!')
        observer.next('How are you?')
        setInterval(() => {
            observer.next('I am good')
        }, 2000)
    } catch (err) {
        observer.error(err)
    }
}).share();

var observer = observable.subscribe(
    (x:any) => addItem(x),
    (error:any) => addItem(error),
    () => addItem('Completed')
);

setTimeout(() => {
    var observer2 = observable.subscribe(
        (x:any) => addItem('Subscriber 2: ' + x)
    )
}, 1000);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}

 */


//////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////





//////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////
/* 




subscription.add(subscription2);
 */