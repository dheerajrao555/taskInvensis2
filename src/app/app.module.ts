import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListDeailsComponent } from './list/list-deails.component';
import { RestService } from './service/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { ViewDetailsComponent } from './view/view-details.component';

import { EditDetailsComponent } from './edit/edit-details.component';
import { FormsModule }    from '@angular/forms';
import { DeleteUserComponent } from './delete/delete-user.component';
import { CreateemployeeComponent } from './create/createemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListDeailsComponent,
    ViewDetailsComponent,
    EditDetailsComponent,
    DeleteUserComponent,
    CreateemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
