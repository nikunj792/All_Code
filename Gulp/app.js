let arr = [{name:'Nikunj'},{name:'Agarwal'}];
let value = document.getElementById('data');
arr.map((item, index)=>{
    return(<div key={index}>
        <p>{item.name}</p>
    </div>);
});