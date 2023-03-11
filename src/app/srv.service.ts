import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SrvService {

  constructor() { }
  sayHallow(){
    return "hellow from test"
  }
}
