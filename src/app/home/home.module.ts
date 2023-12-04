import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { AbilitiesDialogComponent } from './components/abilities-dialog/abilities-dialog.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SidenavComponent,
    CardPokemonComponent,
    PokemonPageComponent,
    AbilitiesDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
