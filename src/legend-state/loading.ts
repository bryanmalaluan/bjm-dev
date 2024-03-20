import { observable } from "@legendapp/state";

export const loadingState$ = observable({
  loading: false as boolean,
});
