import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDeailsComponent } from './list/list-deails.component';
import { AppComponent } from './app.component';
import { ViewDetailsComponent } from './view/view-details.component';
import { EditDetailsComponent } from './edit/edit-details.component';

const routes: Routes = [
{ path: 'listDetails', component: ListDeailsComponent },
{ path: "listDetails/:id", component: ViewDetailsComponent },
{ path: "updateDetails/:id", component: EditDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
