import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { GeneralApiService } from '../Services/general-api.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  reactiveform!:FormGroup;
  formdata={firstname:"",lastname:"",Email:"",MOBN:0,Gender:""};
   //Gender=['Male','Female','Other']
   gender=[];
  constructor(private api:GeneralApiService) {}
  

  ngOnInit(): void {
    //debugger;
    this.gender=this.api.getGender();
    this.reactiveform=new FormGroup({
      'fname':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]),
      'lname':new FormControl('hari'),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'mob':new FormControl(''),
      'gender':new FormControl('')
    })}
    onSubmit()
    {
      

this.formdata.firstname=this.reactiveform.value.fname;
this.formdata.lastname=this.reactiveform.value.lname;
this.formdata.Email=this.reactiveform.value.email;
this.formdata.Gender=this.reactiveform.value.gender;
this.formdata.MOBN=this.reactiveform.value.mob;
console.log(this.formdata);
    }
  
    Reset()
    {
      this.reactiveform.reset();
    }
}
