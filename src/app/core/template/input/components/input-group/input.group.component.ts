import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html'
})
export class InputGroupComponent {
  @Input() errors: {error: string}[] = [];
}
