import { createAction, props } from "@ngrx/store";

export const countIncremented = createAction('[app counter] the count was incremented.');
export const countDecremented = createAction('[app counter] the count was decremented.');
export const countReset = createAction('[app counter] the count was reset.');
export const countBySet = createAction('[app counter] setting count by set', props<{ by: number }>());

export const loadCountBy = createAction(
  '[app counter] load saved count by'
);
