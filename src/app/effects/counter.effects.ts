import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { filter, map, tap } from 'rxjs/operators';
import { countBySet, loadCountBy } from "../actions/counter.actions";

@Injectable()
export class CounterEffects {

  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(ofType(countBySet),
      tap(action => localStorage.setItem('by', action.by.toString()))
    ), { dispatch: false }
  )

  loadCountryBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCountBy),
      map(() => localStorage.getItem('by')),
      filter((value) => value !== null),
      map((val) => parseInt(val, 10)),
      map((by) => countBySet({ by }))
    )
  )

  constructor(private actions$: Actions) { }
}
