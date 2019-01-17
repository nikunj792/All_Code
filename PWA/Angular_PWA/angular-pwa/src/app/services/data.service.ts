import { Injectable } from '@angular/core';
// import { express } from 'express';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  
  public getData():any{
    // let app = express();
    // app.listen(3000,()=>console.log('I am started'));
    // app.get('/get',(req,res)=>{
    //   res.send('I am backend data');
    // })
    
    fetch('http://localhost:3000/get',{
      method:'GET',
      mode: 'cors',
      headers:{
        'Access-Control-Allow-Origin':''
        }
    }).then(response=>response.json()).then(res=>console.log('data', res));
    return 'I am Service Call'
  }
}
