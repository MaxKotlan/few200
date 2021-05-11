import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, selectCountByValue, selectCounterCurrentValue, selectCounterResetButtonDisabled } from 'src/app/reducers';
import * as actions from '../../actions/counter.actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  current$: Observable<number>;
  resetDisabled$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.current$ = this.store.select(selectCounterCurrentValue);
    this.resetDisabled$ = this.store.select(selectCounterResetButtonDisabled);
  }

  increment() {
    this.store.dispatch(actions.countIncremented())
  }

  decrement() {
    this.store.dispatch(actions.countDecremented())
  }

  reset() {
    this.store.dispatch(actions.countReset())
  }

}
