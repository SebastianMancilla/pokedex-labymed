import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokedex',
    loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  { path: '**', redirectTo: 'pokedex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
