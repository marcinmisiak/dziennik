import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZalogujComponent } from './zaloguj/zaloguj.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'zaloguj', component: ZalogujComponent },
 // { path: 'wyloguj', component: AppComponent, },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

