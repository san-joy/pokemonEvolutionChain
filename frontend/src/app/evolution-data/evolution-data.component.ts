import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-evolution-data',
  templateUrl: './evolution-data.component.html',
  styleUrls: ['./evolution-data.component.scss']
})
export class EvolutionDataComponent {
  @Input() evolutionData: any;
}
