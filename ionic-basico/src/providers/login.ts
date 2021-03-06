import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Login{

  constructor(private http: HttpProvider){

  }

  public loginApi(userName : string, password : string ){
    const object = {
      userName : userName,
      password : password
    }
    this.http.url = "http://localhost:3000/logon"
    console.log("json-login",object);

    return this.http.post(object);
  }
}
