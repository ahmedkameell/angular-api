import { UpdateComponent } from './employee/update/update.component';
import { NotfoundComponent } from './sharedUi/notfound/notfound.component';
import { ListempComponent } from './employee/listemp/listemp.component';
import { AddempComponent } from './employee/addemp/addemp.component';
import { HomeComponent } from './sharedUi/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"", component:HomeComponent},
  {path:"addemp", component:AddempComponent},
  {path:"listemp", component:ListempComponent},
  {path:"update/:id" , component:UpdateComponent},
  {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
