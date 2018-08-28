const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async 1');
        resolve(1);
    },2000)
});

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async 2');
        resolve(2);
    },2000)
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async 3');
        reject('Promise Failed')
    },2000)
});

const p4 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Async 4');
        resolve(4);
    },2000)
});

Promise.all([p1,p2,p3,p4])
.then((result)=>{
    console.log('Result is ', result);
})
.catch((error)=>console.log(error))