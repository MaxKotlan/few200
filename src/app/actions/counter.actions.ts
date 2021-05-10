import { createAction } from "@ngrx/store";

export const countIncremented = createAction('[app counter] the count was incremented.');
export const countDecremented = createAction('[app counter] the count was decremented.');
export const countReset = createAction('[app counter] the count was reset.');
