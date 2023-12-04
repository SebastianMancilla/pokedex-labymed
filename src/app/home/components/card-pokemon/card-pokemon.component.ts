import { Component, Input } from '@angular/core';
import { PokemonInfo } from '../../interfaces/pokemon-info.interface';

@Component({
  selector: 'card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent {
  @Input()
  pokemon!: PokemonInfo;
}
