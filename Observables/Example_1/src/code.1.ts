import { Observable }  from "rxjs/Observable";

var observable = Observable.create(
    function subscribe(observer:any){
        try{
            observer.next('Hey I am here ')
            observer.next('How are you')
            observer.next('How are you11111111111')
            observer.complete()
            observer.next('This will not sent')
        }
        catch(err) {
            observer.error(err)
        }
    }

);

observable.subscribe(
    (x:any)=>addItem(x),
    (error:any)=>addItem(error),
    ()=>addItem('Completed Yipppiii')
);

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}