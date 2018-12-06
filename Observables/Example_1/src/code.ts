import { Observable }  from "rxjs/Observable";

var observable = Observable.create(
    function subscribe(observer:any){
        try{
            observer.next('Hey I am here ')
            observer.next('How are you')
            setInterval(()=>observer.next('I am Good'),2000)
            
        }
        catch(err) {
            observer.error(err)
        }
    }

);

var observer = observable.subscribe(
    (x:any)=>addItem(x),
    (error:any)=>addItem(error),
    ()=>addItem('Completed Yipppiii')
);

var observer2 = observable.subscribe(
    (x:any)=>addItem(x),
);

observer.add(observer2);

setTimeout(()=>{
    observer.unsubscribe();
},5000)

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}