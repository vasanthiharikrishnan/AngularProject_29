import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyhomeComponent } from './myhome/myhome.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DirectiveComponent } from './directive/directive.component';
import { CutompipePipe } from './cutompipe.pipe';
import { SwitchComponent } from './Switchfolder/switch/switch.component';
import { NavbarComponent } from './Switchfolder/navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TemplateComponent } from './template/template.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { GeneralApiService } from './Services/general-api.service';
import {HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    RegistrationComponent,
    AboutusComponent,
    DirectiveComponent,
    CutompipePipe,
    SwitchComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TemplateComponent,
    ReactiveComponent,
    UserlistComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [GeneralApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
