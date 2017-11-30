import { Injectable } from '@angular/core';
import {  Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export class Clientclass {
  FirstName: string;
  Surname: string;
  IdentityType: string;
  IdentityNumber: string;
  DOB: string;
}
@Injectable()
export class ClientService {

 
  constructor(private http : Http) { }

  getClient():Observable<any>{
    
        const url = 'http://localhost:52291/api/Client';
        
        return this.http.get(url).map(
          res => {
            const data = res.json();
            console.log(data);
            return data;
    
          }
        )
      }

      SaveClient(clientclass:Clientclass ):Observable<any>{
      var objectToSend = JSON.stringify(clientclass);
      console.log("clientclass");
      console.log(clientclass.FirstName);
      console.log(objectToSend);
      // var dataTosend = 'FirstName=' + '{' + clientclass.FirstName.toString() + '}' +
      // '&' + 'Surname=' +'{' + clientclass.Surname + '}' +
      // '&' + 'IdentityType=' +'{' + clientclass.IdentityType + '}' +
      // '&' + 'IdentityNumber=' +'{' + clientclass.IdentityNumber + '}' +
      // '&' + 'DOB=' +'{' + clientclass.DOB + '}';
      console.log(objectToSend);
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      console.log(objectToSend);
      return this.http.post('http://localhost:52291/api/Client?',objectToSend,{ headers: headers })
      // .map( res => {
      //   const data = res.json();
      //   console.log(data);
      //   return data;
      
 }
    
}
    
