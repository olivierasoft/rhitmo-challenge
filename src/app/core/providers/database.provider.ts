import { Observable, of } from "rxjs";

export class DatabaseProvider<Table> {
  private database$: Observable<Table[]>

  constructor(data: Table[]) {
    this.database$ = of(data);
  }
}
