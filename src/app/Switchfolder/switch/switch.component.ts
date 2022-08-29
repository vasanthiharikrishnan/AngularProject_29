import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
   items:string[]=['Default','Laptop','machine','car','phone'];
   itemchanged:string="";
   radiocolor:string="";
   defaultcolor:string="class1";
  constructor() { }

  ngOnInit(): void {
  }
  selectchange(val:any)
  {
      this.itemchanged=val.target.value;
  }
  changesize(val:any)
  {
           if(val=='s')
           {
            this.radiocolor="class2";
           }
           else
           {
            this.radiocolor="class3";
           }
  }

}
