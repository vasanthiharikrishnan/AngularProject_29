import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  myname:string="Raju";
  imagepath:string="./assets/pic2.png";
 isbool:boolean=false;
 cssclass1:string="class1";
 cssclass2:string="class2";
 changeclass:string="";
 selectclass:string="";
 valuename:string="vasanthi";
  constructor() {
    
   }

  ngOnInit(): void {
  }
  showimage()
  {
    this.isbool=true;
    
  }
  Hideimage()
  {
    this.isbool=false;
  }
message()
{
  alert('hello');
}
changecolor(changename:string)
{
if(changename=="red")
{
  this.changeclass="class1";
}
else
{
  this.changeclass="class2";
}

}
colorselect(colorindex:string)
{
  debugger;
  if(colorindex=='red')
  {
  this.selectclass="class1";
  }
  else{
    this.selectclass="class2";
  }
}
myclick(val:any)
{
  debugger;
  console.log(val);
  console.log(val.target.value);
}
}
