import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  pokemonName: string = "";
  evolutionData: any;

  constructor(private apiService: ApiService) { }

  getEvolution() {
    this.apiService.getEvolutionChain(this.pokemonName).subscribe({
      next: data => {
        this.evolutionData = data;
      },
      error: error => {
        console.log("No data found");
      },
      complete: () => { }
    })
  }
}
