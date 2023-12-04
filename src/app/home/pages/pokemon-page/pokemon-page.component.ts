import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AbilitiesDialogComponent } from '../../components/abilities-dialog/abilities-dialog.component';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';
import { PokemonService } from '../../services/pokemon.service';

interface DataDialog{
  name: string;
}
@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styles: [
  ]
})
export class PokemonPageComponent implements OnInit {

  pokemon! : PokemonInfo;

  constructor(
    private readonly pokemonService: PokemonService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: string,

  ){
    
  }
  ngOnInit(): void {
    this.pokemonService.getPokemonInformationByName(this.data)
      .subscribe( pokemon => this.pokemon = pokemon);
  }



  openAbilityDialog(ability: string){
    this.dialog.open(AbilitiesDialogComponent, {
      data: ability 
    })
  }

}
