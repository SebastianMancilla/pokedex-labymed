import { Component, OnInit, AfterContentInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokeResponse, Pokemon } from '../../interfaces/poke-response.interface';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

import { FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { PokemonPageComponent } from '../pokemon-page/pokemon-page.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  pokemons!: Pokemon[];
  pokemonInfo!: PokemonInfo;
  pokemonsInfo!: Array<PokemonInfo>;


  searchForm: FormGroup = new FormGroup({
    search: new FormControl('', [Validators.required])
  })
  constructor(
    private _snackBar: MatSnackBar,
    private readonly pokemonService: PokemonService,
    private readonly rotuer: Router,
    public dialog: MatDialog
  ) { 

  }
    ngOnInit(): void {
      this.pokemonService.getPokemons(100).subscribe( resp => this.pokemons = resp)

  

  }

  search(){
    if(this.searchForm.value.search == '' || undefined){
      this._snackBar.open('Please, fill the input!', 'Close', { duration: 2000});
      return;
    }
    this.openDialog( this.searchForm.value.search);
  }

  openDialog(name: string){
    this.dialog.open(PokemonPageComponent, {
      data: name
    })
  }

  


}
