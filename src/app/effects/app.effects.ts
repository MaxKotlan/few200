import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";


import * as appActions from '../actions/app.actions';
import * as counterActions from '../actions/counter.actions';

@Injectable()
export class AppEffects {

  loadCounterBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      map(() => counterActions.loadCountBy())
    )


  );

  constructor(private actions$: Actions) { }
}
