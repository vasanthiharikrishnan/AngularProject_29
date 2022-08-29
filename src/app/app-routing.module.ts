import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { SwitchComponent } from './Switchfolder/switch/switch.component';
import{AboutusComponent} from './aboutus/aboutus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
 {path:"myhome" , component:MyhomeComponent},
 {path:"directive",component:DirectiveComponent},
 {path:"switch",component:SwitchComponent},
 {path:"aboutus",component:AboutusComponent},
 {path:"template",component:TemplateComponent},
 {path:"reactive",component:ReactiveComponent},
 {path:"userlist",component:UserlistComponent},
 {path:"**",component:PagenotfoundComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
