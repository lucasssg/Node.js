import { Injectable } from '@angular/core';
import { HttpProvider } from './http';

@Injectable()
export class Tamanhos{

  constructor(private http: HttpProvider){

  }

  public getTamanhos(){
    this.http.url = "http://localhost:3000/tamanhos"
    return this.http.get();
  }
}
