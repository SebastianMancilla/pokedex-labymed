import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: '', component: HomePageComponent},
      { path: ':id', component: PokemonPageComponent},
      { path: '**', redirectTo: ''}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
