import { Component, OnInit } from '@angular/core';
import { SrvService } from '../srv.service';

@Component({
  selector: 'app-summtion',
  templateUrl: './summtion.component.html',
  styleUrls: ['./summtion.component.css']
})
export class SummtionComponent implements OnInit {
  constructor(private service:SrvService){


  }
   ngOnInit(): void {

    this.service.sayHallow()

  }

   squar(number:number) :number{
    return number*number*number

  }




}
