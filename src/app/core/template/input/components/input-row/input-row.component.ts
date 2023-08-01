import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-input-row',
  templateUrl: './input-row.component.html'
})
export class InputRowComponent {
  @Input() extraClasses?: string;
}
