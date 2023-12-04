import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable, map, tap} from "rxjs";
import { PokeResponse, Pokemon } from '../interfaces/poke-response.interface';
import { PokemonInfo } from '../interfaces/pokemon-info.interface';
import { AbilityInformation } from '../interfaces/ability-information.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = environment.BASE_URL;

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPokemons( limit: number): Observable<Pokemon[]>{
    const params: HttpParams = new HttpParams()
      .set('limit', `${limit}`)
    return this.http.get<PokeResponse>(`${this.baseUrl}/pokemon`, {params})
      .pipe(
        map( resp => resp.results),
      )
      
  }

  getPokemonInformationByName( name: string ): Observable<PokemonInfo>{

    return this.http.get<PokemonInfo>(`${this.baseUrl}/pokemon/${name}`)
      .pipe(
        tap(console.log)
      )
   
  }

  getAbilityInformationByName(name: string): Observable<AbilityInformation>{
    return this.http.get<AbilityInformation>(`${this.baseUrl}/ability/${name}`)
    .pipe(
      tap(console.log)
    );
  }
}
