import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.css']
})
export class MyhomeComponent implements OnInit {

  firstname:string="vasanthi";
  Lastname:string="hari";
  Emali:string="abc@gmail.com";
  Age:number=30;
  masters:string="mca";
  Bachelors:string="B.sc";
  gender:string="female";
  classcolor:string="class1";
  isshow:boolean=false;
  colorback()
  {
    this.classcolor="class1";
  }

  constructor() { }

  ngOnInit(): void {
  }
  submit(val1:any,val2:any,val3:any)
  {
    this.isshow=true;
    this.firstname=val1;
    this.Lastname=val2;
    this.Emali=val3;
  }
}
