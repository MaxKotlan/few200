import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCounter from './counter.reducer';
export interface AppState {
  counter: fromCounter.CounterState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: fromCounter.reducer
};

//if you are the view create a featuer selector
//create a selector that returns each main property of your applicaiton state
export const selectCounterBranch = (state: AppState) => state.counter;

export const selectCounterCurrentValue = createSelector(
  selectCounterBranch,
  b => b.current
);

export const selectCounterResetButtonDisabled = createSelector(
  selectCounterCurrentValue,
  b => b === 0
);

export const selectCountByValue = createSelector(
  selectCounterBranch,
  b => b.by
);
//create the selectors your components need
//we need one that returns the current value of the counter
