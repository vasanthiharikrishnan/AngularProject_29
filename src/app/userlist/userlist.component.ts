import { Component, OnInit } from '@angular/core';
import { GeneralApiService } from '../Services/general-api.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private api:GeneralApiService) { }
userlist:any[]=[];
  ngOnInit(): void {
        this.api.DisplayList().subscribe(response=>{
          console.log(response);
          this.userlist=response;
        })

  }

}
