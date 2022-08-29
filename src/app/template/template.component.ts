import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../Services/general-api.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],

})
export class TemplateComponent implements OnInit {

 formdata={firstname:"",lastname:"",email:"",mob:0,gender:""};
 firname:string="";
 Gender=[];
  constructor(private serveapi:GeneralApiService) { }

  ngOnInit(): void {
    this.Gender=this.serveapi.getGender();
  }
  onsubmit(myForm:any)
  {
    console.log(myForm.value);
       
      this.formdata.firstname=myForm.value.fname;
      this.formdata.lastname=myForm.value.lname;
      this.formdata.email=myForm.value.Email;
      this.formdata.gender=myForm.value.gen;
      this.formdata.mob=myForm.value.Mob;
      
  }

}
