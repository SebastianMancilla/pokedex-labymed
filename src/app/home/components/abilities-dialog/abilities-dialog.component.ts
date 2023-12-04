import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AbilityInformation } from '../../interfaces/ability-information.interface';
import { PokemonService } from '../../services/pokemon.service';


@Component({
  selector: 'app-abilities-dialog',
  templateUrl: './abilities-dialog.component.html',
  styles: [
  ]
})
export class AbilitiesDialogComponent implements OnInit {
  ability!: AbilityInformation;

  constructor(
    private readonly pokemonService: PokemonService,
    @Inject(MAT_DIALOG_DATA)
    public data: string,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAbilityInformationByName(this.data)
      .subscribe(ability => this.ability = ability)
  }

  
}
