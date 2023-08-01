import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-sector-title',
  templateUrl: './sector-title.component.html'
})
export class SectorTitleComponent {

  @Input() sectorTitle!: string;

}
