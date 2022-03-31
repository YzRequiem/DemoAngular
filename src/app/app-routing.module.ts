import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NosservicesComponent } from './nosservices/nosservices.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  
  {path: 'home', component: HomeComponent},
  {path: 'apropos', component: AproposComponent},
  {path: 'services', component: NosservicesComponent},
  {path: 'contact', component: ContactComponent},

  {path: 'not-found', component: NotFoundComponent},
    {path: '**', redirectTo: '/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
