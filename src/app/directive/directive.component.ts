import { Component, OnInit } from '@angular/core';
import { CutompipePipe } from '../cutompipe.pipe';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  isShow:boolean=true;
  lstgender:string[]=['male','female','other'];
  student:any[]=[{ID:121,name:"AAA",sal:30000,dob:"1990/1/1",Gender:"Female"},
  {ID:122,name:"BBB",sal:20000,dob:"1993/2/13",Gender:"Male"},
  {ID:123,name:"CCC",sal:40000,dob:"1995/4/14",Gender:"Male"},
  {ID:124,name:"DDD",sal:35000,dob:"1990/2/16",Gender:"Female"},
]
  constructor() { }

  ngOnInit(): void {
  }
  Myclick()
  {
    debugger;
    this.isShow=true;
  }
  justcheck():boolean
  {
    return true;
  }
}
